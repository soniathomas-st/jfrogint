module.exports = function(app , db){
    app.post('/notes', (req, res) => {
        console.log('Created the note : '+ req.body.title);
        res.send('Created Note ' + req.body.title);
    })
}