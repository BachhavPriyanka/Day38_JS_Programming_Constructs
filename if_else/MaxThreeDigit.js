var a = Math.floor(Math.random()*999) + 100;
var b = Math.floor(Math.random()*999) + 100;
var c = Math.floor(Math.random()*999) + 100;
var d = Math.floor(Math.random()*999) + 100;
var e = Math.floor(Math.random()*999) + 100;

if (a>b && a>c && a>d && a>e)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>e)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>e)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>e)
{
    console.log(d);
}
else
{
    console.log(e);
}