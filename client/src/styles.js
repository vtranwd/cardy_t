import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'column',
        justifiedContent: 'center',
        alignItems: 'center',
    }

}))