var a=document.querySelector('.row1-left button');
const row1_right=[
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
]
a.onclick=function(){
    document.querySelector('.row-right').innerHTML=row1_right;
};
var tang_dan=document.getElementById(`abc1`)
tang_dan.onclick=function(){
    document.querySelector(`.row2`).innerHTML=row1_right.sort((m,n)=>(m-n))
}
var giam_dan=document.getElementById(`abc2`)
giam_dan.onclick=function(){
    document.querySelector(`.row2`).innerHTML=row1_right.sort((m,n)=>(n-m))
}
var vi_tri=document.getElementById(`vitri`);
var c;
vi_tri.oninput = function Myfs()
{
    c= vi_tri.value
    console.log(c);
    c=parseInt(c)
    console.log(typeof(c))
}
var gia_tri=document.getElementById(`giatri`);
var g;
gia_tri.oninput = function Myfs()
{
    g= gia_tri.value
    console.log(g);
}
var them=document.querySelector(`.row4 button`)
var do_dai_chuoi = row1_right.length;
console.log(do_dai_chuoi)
them.onclick=function()
{
    row1_right.splice(c,0,g)
    document.querySelector('.row-right').innerHTML=row1_right;
}