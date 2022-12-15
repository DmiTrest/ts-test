import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 12,
    padding: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 6,
    shadowColor: 'rgba(0,0,0,0.8)',
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    color: '#9f9f9f',
  },
  info: {
    fontSize: 12,
    color: '#9f9f9f',
  },
});
