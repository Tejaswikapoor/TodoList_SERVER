$(function(){
    let addedtodo=$(`#inp`)
    let btn=$(`#add`)
    let list=$(`#listitm`)

     function refresh() {
        list.empty()

         $.get('/todos', function (data) {
            for (todo of data) {
                list.append(`<li class="list-group-item">${todo}</li>`)
            }
        })

    }
refresh()
    btn.click(function () {

        let task=addedtodo.val()
        if(task=='')
        {
            alert("Please enter some value")
        }
        else {
            $.get(
                '/addtodo?newtodo=' + task,
                function (data) {
                    if (data != 'success') {
                        alert('Could not add todo')
                    } else {
                        refresh()
                    }
                }
            )
        }
    })


})





