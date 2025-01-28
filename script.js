var valueOfBox=1;
var flag=true;
var player=true;
var player1=false;
var player2=false;
var firstPlayerPosition=0;
var secondPlayerPosition=0;
var oldResultClearPlayerOne=0;
var moved=0;
var oldResultClearPlayeTwo=0;


// function disableFunction()
// {
//     document.getElementById('play').disabled=true;
// }
 for(let counter=1;counter<=10;counter++)
 {
     let parentPara = document.createElement('div');
     let parentId=document.createAttribute('id');
     let parentClass=document.createAttribute('class');
     let tempParentId='parent'+counter;
     parentId.value=tempParentId;
     let parentElement = document.getElementById('main');
     if(counter%2==0)
     {
         parentClass.value='parent reverse';
     }
     else
     {
        parentClass.value='parent';
     }
     parentElement.appendChild(parentPara);
     parentPara.setAttributeNode(parentId);
     parentPara.setAttributeNode(parentClass); 
     for(let subCounter = 1;subCounter<=10;subCounter++)
     {
        let childPara = document.createElement('div');
        if(valueOfBox==4)
        {
            childNode = document.createTextNode(valueOfBox+'-23');
        }
        else if(valueOfBox==28)
        {
            childNode = document.createTextNode(valueOfBox+'-69'); 
        }
        else if(valueOfBox==42)
        {
            childNode = document.createTextNode(valueOfBox+'-96'); 
        }
        else if(valueOfBox==56)
        {
            childNode = document.createTextNode(valueOfBox+'-78'); 
        }
        else if(valueOfBox==99)
        {
            childNode = document.createTextNode(valueOfBox+'-9'); 
        }
        else if(valueOfBox==90)
        {
            childNode = document.createTextNode(valueOfBox+'-43'); 
        }
        else if(valueOfBox==72)
        {
            childNode = document.createTextNode(valueOfBox+'-34'); 
        }
        else if(valueOfBox==53)
        {
            childNode = document.createTextNode(valueOfBox+'-22'); 
        }
        else
        {
            childNode = document.createTextNode(valueOfBox);
        }
        let childImgTag=document.createElement('img');
        let childTwoImgTag=document.createElement('img');
        childPara.appendChild(childNode);
        childPara.appendChild(childImgTag);
        childPara.appendChild(childTwoImgTag);
        let childAttribute = document.createAttribute('class');
        let childImgAttribute=document.createAttribute('class');
        let childTwoImgAttribute=document.createAttribute('class');
        let childId=document.createAttribute('id');
        let childTwoImgId=document.createAttribute('id');
        let childTwoImgSrc=document.createAttribute('src');
        let childImgId=document.createAttribute('id');
        let childImgSrc=document.createAttribute('src');
        childImgId.value='img'+valueOfBox;   
        childTwoImgId.value='twoImg'+valueOfBox;
           
        childId.value=valueOfBox;     
        let childElement = document.getElementById(tempParentId);
        if(subCounter%2==0)
        {
            childAttribute.value='box alternateColor';
        }  
        else
        {
            childAttribute.value='box';
        }
        if(valueOfBox==99||valueOfBox==9||valueOfBox==90||valueOfBox==72||valueOfBox==53||valueOfBox==34||valueOfBox==43||valueOfBox==22)
        {
          childAttribute.value='box snake';
        }
        if(valueOfBox==96||valueOfBox==69||valueOfBox==78||valueOfBox==56||valueOfBox==42||valueOfBox==28||valueOfBox==23||valueOfBox==4)
        {
            childAttribute.value='box ladder';   
        }
        childTwoImgSrc.value=' ';
        childImgSrc.value=' ';
        childTwoImgAttribute.value='position';
        childImgAttribute.value='position';
        childElement.appendChild(childPara);
        childPara.setAttributeNode(childAttribute);
        childPara.setAttributeNode(childId); 
        childImgTag.setAttributeNode(childImgSrc);
        childImgTag.setAttributeNode(childImgId);
        childImgTag.setAttributeNode(childImgAttribute);
        childTwoImgTag.setAttributeNode(childTwoImgSrc);
        childTwoImgTag.setAttributeNode(childTwoImgId);
        childTwoImgTag.setAttributeNode(childTwoImgAttribute);
        valueOfBox++;
     }   
 }
  var txt='First Player';
  var boxcolor="background-color:blue";
 document.getElementById('PlayerTurn').innerHTML=txt;
 document.getElementById('PlayerTurn').style=boxcolor;
 

 document.getElementById('play').addEventListener("click",randomNumberGenerator);

 function randomNumberGenerator() {
     document.getElementById('play').disabled=true;
    clearInterval(moved);
    if(firstPlayerPosition==100||secondPlayerPosition==100)
    {
        document.getElementById('play').disabled=true;
        document.getElementById(diceImg).src='img/dice.png';
    }
    else
    {

        if(firstPlayerPosition==100||secondPlayerPosition==100)
        {
            document.getElementById('play').disabled=true;
            document.getElementById(diceImg).src='img/dice.png';
        }
        else
        {
            document.getElementById('diceImg').src='img/PB.gif';
        }
        value = setTimeout(() => { 
            document.getElementById('diceImg').src=diceImg;
            document.getElementById('num').innerHTML=diceValue;
            document.getElementById('PlayerTurn').innerHTML=txt;
            document.getElementById('PlayerTurn').style=boxcolor;
            turn(player,diceValue);    
            document.getElementById('diceImg').src=diceImg;
        },2500)
         diceValue=Math.floor(Math.random()* 6 + 1 );
         timer=3000;
         setTimeout(() => {
             document.getElementById("play").disabled = false;
            },1800);
         if(diceValue+firstPlayerPosition==100||secondPlayerPosition+diceValue==100)
         {
             clearTimeout(value);
             document.getElementById('play').disabled=true;
             if(player)
            {
                alert("player 1 Winner");
            }
            else
            {
                alert("Player 2 Winner");
            }
            restart=confirm("Do you want to Restart The Game")
            if(restart)
            {
                location.reload();
            }
         }
         if(firstPlayerPosition==100||secondPlayerPosition==100)
         {
            diceImg='img/dice.png'
         }
         else if(diceValue==1)
         {
             diceImg='img/one.png';
         }
         else if(diceValue==2){
             diceImg='img/two.png';
         }
         else if(diceValue==3){
            diceImg='img/three.png';
        }
        else if(diceValue==4){
            diceImg='img/four.png';
        }
        else if(diceValue==5){
            diceImg='img/five.png';
        }
        else if(diceValue==6){
            diceImg='img/six.png';
        }
        if(player){
            txt='Second Player';
            boxcolor="background-color:yellow";
        }   
        else{
            txt='First Player';
            boxcolor="background-color:blue";
        }
    }
 }
 const turn = (player,diceValue) => {
    console.log(player);
        if(player)
        {
            if(firstPlayerPosition==0)
            {
                if(diceValue==6||diceValue==1)
                {
                    document.getElementById('oneStart').style.display='none';
                    firstPlayerPosition=1;
                    setToFirst(player);
                    console.log("firstPlayerPosition"+firstPlayerPosition);
                }
            }
            else
            {
                firstPlayerPosition=moveCounter(player,diceValue,firstPlayerPosition);
                firstPlayerPosition=checkLadder(player,firstPlayerPosition);
                firstPlayerPosition=checkSnake(player,firstPlayerPosition);
                checkWinner(firstPlayerPosition,player);
                console.log("firstPlayerPosition"+firstPlayerPosition);
            }
            this.player=false;
            console.log(player);
        }
        else
        {
            if(secondPlayerPosition==0)
            {
                if(diceValue==6||diceValue==1)
                {
                    document.getElementById('twoStart').style.display='none';
                    secondPlayerPosition=1;
                    setToFirst(player);
                    console.log("secondPlayerPosition"+secondPlayerPosition);
                }
            }
            else
            {
                secondPlayerPosition=moveCounter(player,diceValue,secondPlayerPosition);
                secondPlayerPosition=checkLadder(player,secondPlayerPosition);
                secondPlayerPosition=checkSnake(player,secondPlayerPosition);
                checkWinner(secondPlayerPosition,player);
                console.log("secondPlayerPosition"+secondPlayerPosition);
            }
            this.player=true;

            
        }
 }
 
 const moveCounter = (player,diceValue,position) => {
     oldTarget=position;
     if(player)
     {
         imgsrc="img/player1.png";
         setId='img';
         oldId='img'+position;
         tempId=position+diceValue;
         newId='img'+tempId;
     }
     else
     {
         setId='twoImg';
        imgsrc="img/player2.png";
        oldId='twoImg'+position;
        tempId=position+diceValue;
        newId='twoImg'+tempId;
     }
     position=position+diceValue;
     if(position>100)
     {
         position=position-diceValue;
     }
     else
     {
        // document.getElementById(oldId).style.display='none';

        //Try Animation
        moved=setInterval(() => {
            oldId=setId+oldTarget;
            document.getElementById(oldId).style.display='none';
             console.log("In Move Target : "+oldTarget);
             
             this.oldTarget++;
             if(oldTarget>=position)
             {
                 clearInterval(moved);
             }
             newId=setId+oldTarget;
             document.getElementById(newId).src=imgsrc;
             document.getElementById(newId).style.display='block';
             document.getElementById(newId).style.height='40%';
             document.getElementById(newId).style.width='40%';       
                  
        },100);
        // id='img'+position;
         console.log("hello "+player+" : "+oldId);
        // document.getElementById(newId).src=imgsrc;
        // document.getElementById(newId).style.display='block';
        // document.getElementById(newId).style.height='40%';
        // document.getElementById(newId).style.width='40%';       
     }
     return position;
 }
 const moveTarget = () => {

     if(oldTarget>=position)
     {
         clearTimeout(moved);
     }
     this.oldTarget++;
 }
 
 const setToFirst = (player) => {
    let imgsrc="";
    if(player)
    {
        imgsrc="img/player1.png";
        id='img1'
    }
    else
    {
       imgsrc="img/player2.png";
       id='twoImg1';
    }
    document.getElementById(id).src=imgsrc;
    document.getElementById(id).style.display='block'; 
    document.getElementById(id).style.height='40%';
    document.getElementById(id).style.width='40%';
   
 }
 const checkLadder = (player,position) => {
    oldPosition=position;
    if(player)
    {
        firstoldIdLocation='img'+oldPosition;
    }
    else
    {
        firstoldIdLocation='twoImg'+oldPosition;
    }
    
    flag=false;
    console.log("old position :"+oldPosition);
    if(position==4)
    {
        flag=true;
        position=23;
    }
    else if(position==28)
    {
        flag=true;
        position=69;
    }
    else if(position==42)
    {
        flag=true;
        position=96;
    }
    else if(position==56)
    {
        flag=true;
        position=78;
    }
    console.log("new position :"+position);
    if(flag)
    {
        console.log('yaha se gayab krnge : player1 : '+firstoldIdLocation);
   
        setTimeout(() => {
            // console.log("old old old position Ladder : "+oldPosition);
            document.getElementById(firstoldIdLocation).style.display='none';
             moveCounterfromLadder(player,oldPosition,position)
        }, 700);
    }
    return position;
    
 }
 
 const checkSnake = (player,position) => {
    // if(player)
    // {

    // }
    // else
    // {

    // }
    if(player)
    {
        oldIdLocation='img'+oldPosition;
    }
    else
    {
        oldIdLocation='twoImg'+oldPosition;
    }
    oldPosition=position;
    snakeFlag=false;
    if(position==99)
    {
        snakeFlag=true;
        position=9;
    }
    else if(position==90)
    {
        snakeFlag=true;
        position=43;
    }
    else if(position==72)
    {
        snakeFlag=true;
        position=34;
    }
    else if(position==53)
    {
        snakeFlag=true;
        position=22;
    }
    if(snakeFlag)
    {
        setTimeout(() => {
            document.getElementById(oldIdLocation).style.display='none';
            console.log('yaha se gayab krnge : player1 : '+oldIdLocation);
            
            //console.log("old old old position : "+oldPosition);
            moveCounterfromLadder(player,oldPosition,position)
            
        }, 1600);
    }
    return position;
 }
 const moveCounterfromLadder = (player,oldPosition,position) => {

    let imgsrc="";
     if(player)
     {
         imgsrc="img/player1.png";
         oldId='img'+oldPosition;
         tempId=position;
         newId='img'+tempId;
     }
     else
     {
        imgsrc="img/player2.png";
        oldId='twoImg'+oldPosition;
        tempId=position;
        newId='twoImg'+tempId;
     }
    //  position=position+diceValue;
     
        document.getElementById(oldId).style.display='none';
        // id='img'+position;
        //  console.log("hello"+id);
        document.getElementById(newId).src=imgsrc;
        document.getElementById(newId).style.display='block';
        
        document.getElementById(newId).style.height='40%';
        document.getElementById(newId).style.width='40%';
     
 }
 const checkWinner= (position,player)=> {
     if(position==100)
     {
         document.getElementById('play').disabled = true;
         document.getElementById('diceImg').src='img/dice.png';
         if(player)
         {
            //  alert("player 1 Winner");
            //  location.reload;
            //  document.getElementById('diceImg').src='img/dice.png';
         }
         else
         {
            // alert("Player 2 Winner");
            // document.getElementById('diceImg').src='img/dice.png';
            // location.reload;
         }
        //  restart=confirm("Do you want to Restart The Game")
        // //  =prompt("");
        // if(restart)
        // {
        //     location.reload();
        // }
        //  console.log("restart game "+restart);
     }
}
