import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#993232',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  inputs: {
    width: 200,
    fontSize: 16,
    padding: 4,
    backgroundColor: '#fff',
    margin: 10
  },
  button: {
    backgroundColor: '#e0c1c1',
    color: '#4c1919',
    fontSize: 16,
    padding: 10,
    margin: 10,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  result: {
    fontSize: 20,
    color: '#fff'
  },
  label: {
    fontSize: 16,
    color: '#fff',
    margin: 5
  }
});

export default styles;