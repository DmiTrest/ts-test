import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  wrapper: {
    position: 'relative',
    paddingHorizontal: 12,
    paddingVertical: 16,
    width: '31%',
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'rgba(0,0,0,0.5)',
    overflow: 'hidden',
  },
  header: {
    marginBottom: 15,
  },
  headerTitle: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#242424',
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9f9f9f',
  },
  price: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#242424',
  },
  info: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9f9f9f',
  },
});
