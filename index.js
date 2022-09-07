import AsyncStorage from '@react-native-async-storage/async-storage'
import set from 'lodash/set.js'
import get from 'lodash/get.js'
import omit from 'lodash/omit.js'

const KEY_FOR_STORAGE = 'HasprDB' //` Database Name

let DATASTORE //` Global Variable to store data

//$ Load Data in Function at Start
const LoadHasprDB = async () => {
  try {
    const loadedJson = await AsyncStorage.getItem(KEY_FOR_STORAGE)

    if (!loadedJson) {
      saveToStorage({ init: true })
      console.log(`${KEY_FOR_STORAGE} not found`)
      return
    }

    const data = JSON.parse(loadedJson)
    saveToStorage(
      typeof data === 'object' && data !== null
        ? data
        : {
            init: true,
            language: 'English',
            theme: 'light',
            notificationPreference: 'All',
          }
    )
    console.log(`${KEY_FOR_STORAGE} has been loaded 😍`)
  } catch (error) {
    console.log(error)
  }
}

//$ Save Data in AsyncStorage and also in Context
const saveToStorage = async value => {
  try {
    if (typeof value === 'string') {
      await AsyncStorage.setItem(KEY_FOR_STORAGE, value)
      DATASTORE = value
    } else if (typeof value === 'object' && value !== null) {
      await AsyncStorage.setItem(KEY_FOR_STORAGE, JSON.stringify(value))
      DATASTORE = value
    } else {
      await AsyncStorage.setItem(KEY_FOR_STORAGE, null)
      DATASTORE = null
    }
  } catch (error) {
    console.log(error)
  }
}

//& Part II : Performing CRUD Operations
//$ 1: Create or update Data
/// Save Simple String : create("name", "John Wick") > {name: "John Wick"}
/// Save Nested Object : create("user.account": {name: "John Wick",age: 21}) > {user: {account: {name: "John Wick",age: 21}}}
const create = (key, value) => {
  try {
    let obj = DATASTORE
    set(obj, key, value)
    saveToStorage(obj) //` Save processed data to DB
  } catch (error) {
    console.log('Error Creating Data : ', error)
  }
}

//$ 2: Read Data
/// Read Complete Data : read() > response: {...user: {account: {name: "John Wick",age: 21}}...}
/// Read Specific Data : read("user.account.name") > response: "John Wick"
const read = key => {
  try {
    if (!key) return DATASTORE

    let obj = DATASTORE
    let newData = get(obj, key)
    return newData
  } catch (error) {
    console.log('No Data To Read :', error)
  }
}

//$ 3: Delete Data
/// Delete Complete Data : remove() > response: {null}
/// Delete Specific Data : remove("user.account.name") > response: {user: {account: {}}}
/// Delete Multiple Properties : remove(["user.account.name","theme","auth.token"]) > response: {user: {account: {}}}
const remove = key => {
  try {
    let obj = DATASTORE
    if (!key) {
      saveToStorage({ init: true })
      return
    }
    if (typeof key === 'string') {
      let newData = omit(obj, key)
      saveToStorage(newData)

      return
    }
    if (Array.isArray(key)) {
      let newData = omit(obj, key)
      saveToStorage(newData)

      return
    }
  } catch (error) {
    console.log('No Data To Delete :', error)
  }
}

export { create, read, remove }
export default LoadHasprDB
