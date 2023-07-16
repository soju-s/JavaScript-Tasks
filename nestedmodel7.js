// for(row=1;row<=4;row++)
// {
//     str=''
//     for(col=1;col<=7;col++)
//     {
//        console.log(row+col==5?'*':' ');
//         console.log(col-row==3?'*':' ');
//     }
// }


for(row=1;row<=4;row++)
{
    str=''
    for(col=1;col<=7;col++)
    {
        if(row==4||row+col==5||col-row==3){
           str=str+'*\t'
        }
        else {
            str=str+' \t'
        }
    }
   console.log(str);
}