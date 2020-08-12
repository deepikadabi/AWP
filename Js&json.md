# AWP
All AWP Codes Are Here

```let arr= [];```
undefined

```let arr = [1,2,3];```
undefined

```let arr = [1, "A" , 3.16 , true, () =>{}, 11, function() {}];
```undefined

```console.log(arr);
VM1913:1 (7) [1, "A", 3.16, true, ƒ, 11, ƒ]```
undefined

```
console.log(arr[3]);```
VM1979:1 true
undefined

```console.log(arr[4]);```
VM1989:1 () =>{}
undefined

// Array Function //
```
for(let i=0; i<arr.length; i++){
    const item = arr[i];
    console.log(item);
}
```

//delete eliment
//befone
(9) [1, "A", 3.16, true, "deep", "ofkhmn", "deepika", "sanam", 2]
```arr.splice(4, 2, "deep"); // splice(start, deletecount, ..element);
```
(2) ["deep", "ofkhmn"]
//After
```console.log(arr);```
VM3118:1 (8) [1, "A", 3.16, true, "deep", "deepika", "sanam", 2]



//Add element
//before
```console.log(arr);```
VM3118:1 (8) [1, "A", 3.16, true, "deep", "deepika", "sanam", 2]
//After
```arr.splice(2, 0, "chetan");```
[]
```console.log(arr);```
VM3237:1 (9) [1, "A", "chetan", 3.16, true, "deep", "deepika", "sanam", 2]


//Add element at last-1 index
```let arr = [1, "A" , 3.16 , true, () =>{}, 11, function() {}];
```
undefined
```console.log(arr);```
VM3452:1 (7) [1, "A", 3.16, true, ƒ, 11, ƒ]
undefined

```arr.splice(arr.length-1, 0, "Deepika");```
[]
```console.log(arr);```
VM3469:1 (8) [1, "A", 3.16, true, ƒ, 11, "Deepika", ƒ]


// json--------------

//creating an object
```
let person = {
    id : 10,
    fname: "sachin",
    lname: "dabi",}; ```
undefined
//access => we can access using (.)operator or []
```"fname" : "sachin"```
//when attribute are using special character then we cant use (.) we can use onle person['fname']
```person.id```
10
```person["id"]```
10
```person["fname"]```
"sachin"


//Other way to write
```
let list = [
    {id: 10, fname: "Deepika",},
    {id: 11, fname: "dabi",},
];  ```


```list[1];```
{id: 11, fname: "dabi"}
```list[1].fname```
"dabi"
```list[1].id```
11


