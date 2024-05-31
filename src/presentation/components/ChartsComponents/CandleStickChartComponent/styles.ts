import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  uppar: {
    width: '100%',
    height: Dimensions.get('window').height / 9,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 2,
    marginBottom: 5,
  },
  uppar_image_view: {
    marginLeft: 20,
    marginRight: 10,
  },
  uppar_image: {
    height: 50,
    width: 50,
  },
  uppar_text_1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  uppar_text_2: {
    color: '#DDDDDD',
    fontSize: 18,
  },
  upper_status: {
    alignItems: 'center',
    flex: 1,
  },
  upper_status_2_green: {
    color: '#B4FF9F',
    fontSize: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  upper_status_2_red: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  upper_status_1: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  loader: {
    marginTop: 40,
  },
  mid: {
    width: '95%',
    height: Dimensions.get('window').height / 5,
    backgroundColor: '#212245',
    borderRadius: 12,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timechanger: {
    width: '95%',
    height: Dimensions.get('window').height / 20,
    backgroundColor: '#212245',
    borderRadius: 12,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  timechanger_touchable: {
    backgroundColor: '#333C83',
    padding: 3,
    borderRadius: 5,
    width: '22%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timechanger_text: {
    color: 'white',
  },
  text_24h: {
    color: 'white',
    alignSelf: 'flex-end',
    marginRight: 13,
    fontSize: 13,
  },
  bottom: {
    width: '95%',
    height: Dimensions.get('window').height * (10 / 100),
    backgroundColor: '#212245',
    borderRadius: 12,
    marginTop: 12,
    paddingHorizontal: 10,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#4F4E7E',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    marginTop: 6,
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  more: {
    width: '95%',
    height: Dimensions.get('window').height / 4.5,
    backgroundColor: '#212245',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title_more: {
    color: '#4F4E7E',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description_more: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 13,
  },
  footerbtns: {
    width: '95%',
    marginTop: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  refreshbtn: {
    marginRight: 7,
    backgroundColor: '#7FB5FF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    height: 42,
    padding: 2,
    flexDirection: 'row',
  },
  sharebtn: {
    backgroundColor: '#7FB5FF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 42,
    padding: 2,
    flexDirection: 'row',
  },
});
