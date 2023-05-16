const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    // height: 456,
    	minHeight: 'max-content',
    width: { mobile: '280px', tablet: '336px', desktop: '288px' },
    position: 'relative',
    borderRadius: '0px 0px 40px 40px',
    padding: '0px',
    // marginTop: { mobile: '24px', tablet: '87px', desktop: '42px' }
  },
  // wrapper: {
  //   padding: 0,
  //   marginTop: { mobile: '24px', tablet: '87px', desktop: '42px' },
  // },
  media: {
    height: 288,
  },
  content: {
    flexGrow: 1,
    padding: 2,
    height: 168,
    
  },
  title: {
fontWeight: '700',
		fontSize: '28px',
    lineHeight: '38px',
    fontFamily: 'typography.fontFamily',
  },
  category: {
    position: 'absolute',
    top: 16,
    // left: 1,
    bgcolor: 'primary.secondary',
    color: 'primary',
    p: 1,
    height: 32,
    width: 126,
    borderRadius: '0px  16px 16px 0px',
    fontSize: theme => theme.typography.subtitle2.fontSize,
    fontWeight: theme => theme.typography.subtitle2.fontWeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete: {
    position: 'absolute',
    top: '68px',
    right: 1,
    height: 40,
    width: 40,
    bgcolor: 'primary.secondary',
    borderRadius: 50,
     margin: ' 0 12px 0 0',
  },
  favorite: {
    position: 'absolute',
    top: 1,
    right: 1,
    height: 40,
    width: 40,
    bgcolor: 'primary.secondary',
    borderRadius: 50,
     margin: ' 12px 12px 16px 0',
   
  },
  components: {
    position: 'absolute',
    bottom: 180,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
  },
  component: {
    bgcolor: 'primary.secondary',
    color: 'primary',
    borderRadius: 16,
    height: 28,
    width: 80,
    margin: '0 5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWraper: {
    display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  },
  button: {
    display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding:' 8px 28px',
gap: '10px',

position: 'absolute',
width: '248px',
height: '38px',
left: '16px',
top: '394px',


border: '2px solid #54ADFF',
borderRadius: '40px',
  },
};

export default styles;
