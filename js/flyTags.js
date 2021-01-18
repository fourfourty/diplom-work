(function(){

    const teg_1El = document.querySelector('.about__teg-1'),
    teg_2El = document.querySelector('.about__teg-2'),
    teg_3El = document.querySelector('.about__teg-3'),
    teg_4El = document.querySelector('.about__teg-4'),
    teg_5El = document.querySelector('.about__teg-5');

    window.onload = () => {
        if (document.body.clientWidth > '1024') {

            teg_1El.style.transform = 'translateX(415px) translateY(33px) rotate(0deg)';
            teg_1El.style.transition = '2s';

            teg_2El.style.transform = 'translateX(-300px) translateY(-35px) rotate(20deg)';
            teg_2El.style.transition = '2s';

            teg_3El.style.transform = 'translateX(-250px) translateY(200px) rotate(20deg)';
            teg_3El.style.transition = '2s';

            teg_4El.style.transform = 'translateX(0px) translateY(540px) rotate(-5deg)';
            teg_4El.style.transition = '2s';

            teg_5El.style.transform = 'translateX(578px) translateY(405px) rotate(0deg)';
            teg_5El.style.transition = '2s';

        }
        if (document.body.clientWidth <= '1024' && document.body.clientWidth > '768') {
            teg_1El.style.transform = 'translateX(878px) translateY(16px) rotate(0deg)';
            teg_1El.style.transition = '2s';

            teg_2El.style.transform = 'translateX(70px) translateY(20px) rotate(0deg)';
            teg_2El.style.transition = '2s'; 

            teg_3El.style.transform = 'translateX(50px) translateY(500px) rotate(0deg)';
            teg_3El.style.transition = '2s'; 

            teg_4El.style.transform = 'translateX(350px) translateY(450px) rotate(0deg)';
            teg_4El.style.transition = '2s';

            teg_5El.style.transform = 'translateX(390px) translateY(100px) rotate(-0deg)';
            teg_5El.style.transition = '2s';
        }
        if (document.body.clientWidth <= '768' && document.body.clientWidth > '576') {
            teg_1El.style.transform = 'translateX(180px) translateY(390px) rotate(-12deg)';
            teg_1El.style.transition = '2s';

            teg_2El.style.transform = 'translateX(10px) translateY(495px) rotate(20deg)';
            teg_2El.style.transition = '2s'; 

            teg_3El.style.transform = 'translateX(290px) translateY(30px) rotate(20deg)';
            teg_3El.style.transition = '2s'; 

            teg_4El.style.transform = 'translateX(290px) translateY(-380px) rotate(15deg)';
            teg_4El.style.transition = '2s';

            teg_5El.style.transform = 'translateX(60px) translateY(-30px) rotate(-25deg)';
            teg_5El.style.transition = '2s';
        }
        if (document.body.clientWidth <= '576' && document.body.clientWidth > '320') {

            teg_1El.style.transform = 'translateX(400px) translateY(485px) rotate(-12deg)';
            teg_1El.style.transition = '2s';

            teg_2El.style.transform = 'translateX(40px) translateY(250px) rotate(20deg)';
            teg_2El.style.transition = '2s'; 

            teg_3El.style.transform = 'translateX(40px) translateY(450px) rotate(20deg)';
            teg_3El.style.transition = '2s'; 

            teg_4El.style.transform = 'translateX(150px) translateY(-30px) rotate(15deg)';
            teg_4El.style.transition = '2s';

            teg_5El.style.transform = 'translateX(-190px) translateY(120px) rotate(-25deg)';
            teg_5El.style.transition = '2s';
        }
        if (document.body.clientWidth <= '375') {

            teg_1El.style.transform = 'translateX(100px) translateY(20px) rotate(-12deg)';
            teg_1El.style.transition = '2s';

            teg_2El.style.transform = 'translateX(-100px) translateY(-25px) rotate(0deg)';
            teg_2El.style.transition = '2s'; 

            teg_3El.style.transform = 'translateX(-115px) translateY(84px) rotate(0deg)';
            teg_3El.style.transition = '2s'; 

            teg_4El.style.transform = 'translateX(25px) translateY(-40px) rotate(0deg)';
            teg_4El.style.transition = '2s';

            teg_5El.style.display = 'none';
        }
    }
})()
