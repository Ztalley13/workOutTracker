console.log('javascript')

$('#save').on('click', function (e){
    e.preventDefault()
    var data = {
        workoutname: $('#workoutname').val()
        // exercise: [{
        //     exercisename: $('#exercisename').val(),
        //     numberofreps: $('#numberofreps').val()
        // }]
    }
        console.log(data)

    $.ajax({
        type: 'POST',
        url: '/api/newworkout',
        data: data,
        success: function(data) {
            console.log(data)
            $('#hi').append(`<p>workoutname-${data.workoutname}</p> <p>id:${data._id}</p>`)
            $('#after').append(`workout:${data.workoutname}`)
            $('#new').attr('data-id', data._id)
        }
    })
})

$('#new').on('click', function (e){
    e.preventDefault()
    var data = {
        
        
            exercisename: $('#exercisename').val(),
            numberofreps: $('#reps').val()
        
    }
        console.log(data)
    var id = $(this).attr('data-id')
    console.log(id)
    $.ajax({
        type: 'PUT',
        url: '/api/addexercise/' + id,
        data: data,
        success: function(data) {
            console.log(data)
           
            // $('#after')(`workout:${data.workoutname}`)
        }
    })
})