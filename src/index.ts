import app from './app'
import './database';

app.listen(app.get('port'),()=>{
    console.log("server connected in", app.get('port'))
})
