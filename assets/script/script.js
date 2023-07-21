const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const menu = document.querySelector('.ul-wrapper');
const slides = document.querySelectorAll(".testimonial");
const nextSlide = document.querySelector(".next-btn");
const prevSlide = document.querySelector(".prev-btn");
const slideNums = document.querySelectorAll(".slide-nums");
const faq = document.querySelectorAll(".faq");
const dropDown = document.querySelectorAll(".drop-down");
const arrows = document.querySelectorAll(".fa-angle-down");




/*=======Logic for the header to stick on scroll*==========*/

window.addEventListener('scroll', ()=>{
    header.classList.toggle('fixed-item', window.scrollY >45);
     
    
  
  });

  
/*=======Logic to open/close menu *==========*/

menuBtn.addEventListener('click', ()=>{
    menu.classList.add('show-menu');
});

cancelBtn.addEventListener('click',()=>{
    menu.classList.remove('show-menu');
});



/*=======Logic for the accordion*==========*/

/*I drew inspiration from the accordion I see on chrome mobile*/
faq.forEach((question,index)=>{
  question.addEventListener('click', ()=>{
      dropDownLogic(index);
  });
});

const dropDownLogic = (i) =>{
  
/*
Initially I was going to make it so that only one accordion is visible at any given time,
 When one opens the other closes, but I ended up following the one I see on google chrome
 
 */
    // dropDown.forEach((drop)=>{
    //     drop.classList.remove('show-drop-down');
        
    // });

    // arrows.forEach((arrow)=>{
    //     arrow.classList.remove('angle-up');
        
    // });

    dropDown[i].classList.toggle('show-drop-down');
    arrows[i].classList.toggle('angle-up');
}



const verticalSlider = ()=>{
  
  // loop through slides and set each slides translateY
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateY(${indx * 100}%)`});
    
        
    // current slide counter
    let curSlide = 0;
    // maximum number of slides
    let maxSlide = slides.length - 1;
    
    
     // This remove function removes all active slide numbers before proceeding to a new slide
    const remove = ()=>{
        slideNums.forEach((slideNum)=>{
         slideNum.classList.remove('current-num');
        })
       }
      
        // add event listener and navigation functionality
    nextSlide.addEventListener("click", function () {
      // check if current slide is the last and reset current slide
      
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }
    
      //   move slide by -100%
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
         remove();
       // Show the slide number that is currently being displayed
       slideNums[curSlide].classList.add('current-num');
      });
    });
    
    
    prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
       
        if (curSlide === 0) {
          curSlide = maxSlide;
        } else {
          curSlide--;
        }
      
        //   move slide by 100%
        slides.forEach((slide, indx) => {
          slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
            remove();
        // Show the slide number that is currently being displayed
       slideNums[curSlide].classList.add('current-num');
       
        });
      });
    

      
   
      
   /**This is the logic that allows the slides to move based on what number in the slide buttons container is clicked, 
     *  this makes it so that the slide Numbers are not just indicators and adds functionality */


      slideNums.forEach((slideNum, i)=>{
        
        slideNum.addEventListener('click', ()=>{
           curSlide = i;
            remove();
            slides.forEach((slide, indx) => {
                slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
              });
               // Show the slide number that is currently being displayed
              slideNums[curSlide].classList.add('current-num');
        });
        
      });
    
      
         
       
      
    }



    
    const horizontalSlider = ()=>{
        
    // loop through slides and set each slides translateX
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`});
    
        
    // current slide counter
    let curSlide = 0;
    // maximum number of slides
    let maxSlide = slides.length - 1;
    
    
    
    
     // This remove function removes all active slide numbers before proceeding to a new slide
    const remove = ()=>{
        slideNums.forEach((slideNum)=>{
         slideNum.classList.remove('current-num');
        })
       }
      
    
    // add event listener and navigation functionality
    nextSlide.addEventListener("click", function () {
      // check if current slide is the last and reset current slide
      
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }
    
      //   move slide by -100%
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        remove();
        // Show the slide number that is currently being displayed
       slideNums[curSlide].classList.add('current-num');
      });
    });
    
    
    prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
       
        if (curSlide === 0) {
          curSlide = maxSlide;
        } else {
          curSlide--;
        }
      
        //   move slide by 100%
        slides.forEach((slide, indx) => {
          slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
            remove();
        // Show the slide number that is currently being displayed
       slideNums[curSlide].classList.add('current-num');
       
        });
      });
    
      
    /**This is the logic that allows the slides to move based on what number in the slide buttons container is clicked, 
     *  this makes it so that the slide Numbers are not just indicators and adds functionality */

      slideNums.forEach((slideNum, i)=>{
        
        slideNum.addEventListener('click', ()=>{
           curSlide = i;
            remove();
            slides.forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
              });
              slideNums[curSlide].classList.add('current-num');
        });
        
      });
    
    
    }


/**
 * I am so sorry this code looks this messy but, I have learned a few valuable lessons here  
 * Function Scope and reassignment:
 * Because I am declaring curSlide inside of my slider function with a let keyword, I am able to reassign it
 * howsoever I please inside of my function, It's also not accessible outside my function

  */

/**
 *
 * This logic for the slider is too far down abi?
 * 
 * Because Javascript evaluates from top to bottom and also cos I can't call a function I haven't declared, I had no other
 * choice that to put this at the bottom.
 * 
 * 
 * The reason for this in the first place and the need to create two functions was based on the figma stylesheet for this project
 *  */
  window.screen.width>= 1024 ? verticalSlider() : horizontalSlider();






