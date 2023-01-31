

function Addtodo() {
    const  inputelment=document.querySelector('input');
    const value=inputelment.value;

    const todocontainer=document.createElement('div');
    todocontainer.className='flex justify-between items-center';
    const todotitle=document.createElement('h1')
    todotitle.textContent=value;

    const doneb=document.createElement('button');
    doneb.className='class="bg-green-500 rounded-lg p-2';
   doneb.textContent='Done';

   todocontainer.appendChild(todotitle);
   todocontainer.appendChild(doneb);
   const alltosdoscontainer=document.getElementById('divl');
   alltosdoscontainer.appendChild(todocontainer);
   inputelment.value='';

}