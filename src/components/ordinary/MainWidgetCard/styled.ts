import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 16,
    width: '48%',
    height: 160,
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'rgba(0,0,0,0.5)',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#242424',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#c3c4c4',
  },
  status: {
    flex: 1,
  },
  statusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    width: 12,
    height: 12,
    backgroundColor: '#d97f98',
    borderRadius: 6,
  },
  statusIcon: {
    fontSize: 8,
    fontWeight: '500',
    color: '#fff',
  },
  statusText: {
    fontSize: 11,
    color: '#5a5b5c',
  },
  statusInfo: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: '500',
    color: '#cdd2da',
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: '#242424',
  },
  time: {
    fontSize: 12,
    fontWeight: '500',
    color: '#c3c4c4',
  },
  progressBar: {
    width: '100%',
    height: 3,
    backgroundColor: '#c8cdd6',
    borderRadius: 50,
  },
  progressBarLine: {
    height: '100%',
    backgroundColor: '#778297',
    borderRadius: 50,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 8,
    shadowColor: 'rgba(0,0,0,0.6)',
  },
  details: {
    flexDirection: 'row',
  },
  detailsText: {
    fontSize: 12,
    color: '#5a5b5c',
  },
});
