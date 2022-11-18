console.log("hello")
// Make sure you include axios so that 
// you can easily make AJAX requests.
// // Using jQuery, take the form value and
//  using axios, make an AJAX request to send 
//  it to the server.
$("form").submit(function(event) {
    alert("hello")
    event.preventDefault()
    // alert("hello 2")
    let $form = $(this)
    word = $form.find("input[name='guess']").val()
    url = $form.attr("action")

    let posting = $.post(url, {"guess": word})
    $form.val("")
    let validWords = $("li").text(guess)
    $("ul").append(validWords)
    return posting
})