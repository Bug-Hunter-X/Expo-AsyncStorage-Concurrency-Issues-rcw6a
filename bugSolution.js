This solution uses async/await to ensure that AsyncStorage operations are performed sequentially, preventing concurrency problems.
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
}

export async function getData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null;
  }
}

//Example usage
async function test(){
  await storeData('@key_name', { name: 'John Doe', age: 30 });
  const value = await getData('@key_name');
  console.log('value:',value)
}

test();
```