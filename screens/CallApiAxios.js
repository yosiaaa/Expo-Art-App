import { View, Text, Button, Image } from "react-native";
import React, { useState } from "react";
import Axios from "axios"

const CallApiAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  })

  const [dataJob, setDataJob] = useState({
    name: '',
    job: ''
  })

    // Call API
    // Method GET
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    // Method POST
    // const dataForApi = {
    //   name: "morpheus",
    //   job: "leader"
    // }
    // console.log('Data object: ', dataForApi);
    // console.log('Data stringify: ', JSON.stringify(dataForApi));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(dataForApi)
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('post response: ', json)
    //   })

  const getData = () => {
    Axios.get('https://reqres.in/api/users/3')
    .then(result => {
      setDataUser(result.data.data);
    })
    .catch(err => console.log('error :', err))
  }
  
  const postData = () => {
    const dataForApi = {
      name: 'morpehus',
      job: 'leader',
    }

    Axios.post('https://reqres.in/api/users/3', dataForApi)
    .then(result => {
      setDataJob(result.data)
    })
    .catch(err => console.log('err: ', err))
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>CallApiAxios</Text>
      <Button title="GET DATA" onPress={getData}/>
      <Text>Response GET DATA</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={{width: 100, height: 100, borderRadius: 100}}/>
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={{height: 2, backgroundColor: 'black', marginVertical: 20}}/>
      <Button title="POST DATA" onPress={postData}/>
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallApiAxios;
