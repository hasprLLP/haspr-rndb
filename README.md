# Haspr Async Offline Database

[![GitHub license](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/hasprLLP/haspr-rndb/main/LICENSE)

This package has been created by Haspr for use in their in-house projects. Others are free to use this package and leave their feedback for improvements

**License** - _Copyright (c) 2022, Haspr. All rights reserved._

![HASPR](https://i.ibb.co/2M1D3Px/Cover.png)

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) or [npm](https://nodejs.org/en/) to install haspr-rndb.

```bash
yarn add haspr-rndb
```

or

```bash
npm install haspr-rndb
```

## Load Database

In order to use the database, you have to first declare it in your App.js file before the functions for best performance

```javascript
import HasprDB from 'haspr-rndb'
import React from 'react'
import { View, Text } from 'react-native'

HasprDB() //` Start the Database

export default function App() {
  return (
    <View>
      <Text>Your App Here...</Text>
    </View>
  )
}
```

# Performing CRUD Operations

You can use the build in operations create, read and remove to perform crud operations

## 1. create()

The create function can be used to create simple strings, Objects, Nested Objects, Arrays, and Booleans. The Create functions can also be used to update values as it creates new values and keeps the existing data intact.

```javascript
import HasprDB, { create } from 'haspr-rndb'
import React from 'react'
import { View, Text } from 'react-native'

HasprDB() //` Start the Database

export default function App() {
  const saveUser = () => {
    const OTP = 861245
    create('pin', OTP)
    const result = create('user.auth.name', 'The Rock')
    console.log(result)
    // result >>{ user: { auth: { name: "The Rock" } } }
    navigation.navigate('VerifyPin')
  }

  return (
    <View>
      <TouchableOpacity onPress={saveUser}>Save Pin</TouchableOpacity>
    </View>
  )
}
```

## 2. read()

The read function can be used to read simple strings, Objects, Nested Objects, Arrays, and Booleans using string path of objects connected with dots, e.g. , one may want to check if user is logged in from an object, read('user.auth.isLogin') if exists will return the value TRUE

```javascript
import HasprDB, { read } from 'haspr-rndb'
import React from 'react'
import { View, Text } from 'react-native'

HasprDB() //` Start the Database

export default function App() {
  const pin = read('pin')
  console.log(pin)
  // result >> 861245

  const user = read('user.auth')
  console.log(user)
  // result >> { name: "The Rock" }

  return (
    <View>
      <TouchableOpacity onPress={saveUser}>Save Pin</TouchableOpacity>
    </View>
  )
}
```

## 3. remove()

The remove function can be used to delete simple strings, Objects, Nested Objects, Arrays, and Booleans using string path of objects connected with dots.

```javascript
import HasprDB, { remove } from 'haspr-rndb'
import React from 'react'
import { View, Text } from 'react-native'

HasprDB() //` Start the Database

export default function App() {
  // Remove Single Data
  const deletePin = () => remove('pin')

  // Remove Nested Data
  const deleteName = () => remove('user.auth.name')

  // Remove Multiple Data
  const deleteMultiple = () => remove(['user.auth', 'theme'])

  // Clear All Data and Reset DB
  const deleteAllData = () => remove()

  return (
    <View>
      <TouchableOpacity onPress={deletePin}>Delete Pin</TouchableOpacity>
      <TouchableOpacity onPress={deleteName}>Delete Name</TouchableOpacity>
      <TouchableOpacity onPress={deleteMultiple}>Delete Multiple</TouchableOpacity>
      <TouchableOpacity onPress={deleteAllData}>Delete Everything</TouchableOpacity>
    </View>
  )
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
