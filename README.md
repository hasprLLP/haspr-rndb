# Haspr Offline Database for React Native and Expo

<a href="https://www.npmjs.com/package/haspr-rndb"><img src="https://img.shields.io/npm/v/haspr-rndb?color=green" alt="NPM Version"></a>
<a href="LICENCE"><img src="https://img.shields.io/github/license/hasprLLP/haspr-rndb?color=orange" alt="Licence"></a>
<img src="https://img.shields.io/bundlephobia/min/haspr-rndb?color=blue" alt="Bundle file size">
<img src="https://img.shields.io/bundlephobia/minzip/haspr-rndb?color=yellow&label=gzip%20size" alt="Bundle file size (gzip)">
<a href="https://npmcharts.com/compare/haspr-rndb?minimal=true"><img src="https://img.shields.io/npm/dm/haspr-rndb?color=black" alt="NPM Downloads"></a>

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

## Features

- High Performance VM Storage
- Offline Storage for instant access
- CRUD Operations are a breeze
- Works with Both React Native and Expo

# Load Database

In order to use the database, you have to first declare it in your App.js file before the functions for best performance
_You only have to do this once at the top level of your React Native or Expo App, which will usually be **App.js**_

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
import { View, Text, TouchableOpacity } from 'react-native'

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

## Feedback

If you have any feedback, please reach out to us at contact@haspr.in

## 🔗 Links

[![portfolio](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=site&logoColor=white)](https://haspr.in/)

[![facebook](https://img.shields.io/badge/facebook-0A66C2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/hasprdesign)

[![instagram](https://img.shields.io/badge/instagram-E1306C?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/hasprdesign/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/hasprdesign)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/hasprllp)

[![youtube](https://img.shields.io/badge/youtube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UC0xbdzfePWB65W8Ap-Aj-VA)

[![pinterest](https://img.shields.io/badge/pinterest-E60023?style=for-the-badge&logo=pinterest&logoColor=white)](https://in.pinterest.com/hasprdesign/)

[![behance](https://img.shields.io/badge/behance-053eff?style=for-the-badge&logo=behance&logoColor=white)](https://www.behance.net/haspr/)

[![dribbble](https://img.shields.io/badge/dribbble-ea4c89?style=for-the-badge&logo=dribbble&logoColor=white)](https://dribbble.com/haspr)

[![github](https://img.shields.io/badge/github-171515?style=for-the-badge&logo=github&logoColor=white)](https://dribbble.com/haspr)

![Logo](https://haspr.in/static/svg/brand-logo.svg)
