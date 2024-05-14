import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(name: string, value: any) {
  try {
    if (!value) {
      AsyncStorage.removeItem(name);
      return;
    }

    await AsyncStorage.setItem(name, JSON.stringify(value));
  } catch (e) {
    // error
  }
}

export async function getData(name: string) {
  let jsonValue: any;
  try {
    jsonValue = await AsyncStorage.getItem(name);
  } catch (e) {
    // error
  }

  return JSON.parse(jsonValue) || false;
}
