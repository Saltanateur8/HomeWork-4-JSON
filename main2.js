const req = new XMLHttpRequest()
req.onload = () => {
    const array = req.response;
   const response = JSON.parse(array)
    console.log(response)
}
req.open("GET","data.json")
req.send()

