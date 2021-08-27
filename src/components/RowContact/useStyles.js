import { makeStyles } from "@material-ui/core";

export default makeStyles({
    container: {
        padding: "5px 0",
        display: "flex",
        alignItems: 'center',
        "& .image": {
            marginRight: 16,
        },
        "&>div>div>p": {
            fontSize: 13,
            marginBottom: 0,
            "&.title": {
                fontWeight: 'bold',
                textTransform: 'capitalize'
            }
        },
        "& .action-item": {
            marginLeft: "auto"
        }
    }
})