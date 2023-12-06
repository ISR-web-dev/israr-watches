
const testimonialData = [
    {
        name: 'John Doe',
        testimonial: '"ISRAR is a watch brand that truly embodies the fusion of innovation and craftsmanship. Their timepieces are not only stylish and sophisticated, but they are also incredibly well-made. I am so impressed with the quality of their watches and I would highly recommend them to anyone looking for a premium timepiece."'
    },
    {
        name: 'Jane Smith',
        testimonial: '" ISRAR watches are a perfect blend of style and functionality. I love the sleek design and the high-quality materials used in their construction. My ISRAR watch is my favorite accessory and I get compliments on it all the time."'
    },
    {
        name: 'David Brown',
        testimonial: '"I was looking for a watch that was both stylish and durable, and I found it with ISRAR. Their watches are made to last, and I know that I will be able to wear mine for years to come. I am also a big fan of the brands commitment to sustainability."'
    }
]

let testimonialCount = 0;

function countControlNext() {
    if (testimonialCount < 2) {
        testimonialCount++;
    }
    else {
        testimonialCount = 0;
    }
}
function countControlPre() {
    if (testimonialCount > 0) {
        testimonialCount--;
    }
    else {
        testimonialCount = 2;
    }
}

document.querySelector('.left').addEventListener('click', () => {
    countControlPre();
    document.querySelector('.testimonial-name').innerHTML = testimonialData[testimonialCount].name;
    document.querySelector('.testimonial').innerHTML = testimonialData[testimonialCount].testimonial;
});
document.querySelector('.right').addEventListener('click', () => {
    countControlNext();
    document.querySelector('.testimonial-name').innerHTML = testimonialData[testimonialCount].name;
    document.querySelector('.testimonial').innerHTML = testimonialData[testimonialCount].testimonial;
});

document.querySelector('.img-1').addEventListener('click', () => {
    const selectedSrc = document.querySelector('.img-1').getAttribute('src');
    document.querySelector('.selected-img').setAttribute('src', selectedSrc);

});

document.querySelector('.img-2').addEventListener('click', () => {
    const selectedSrc = document.querySelector('.img-2').getAttribute('src');
    document.querySelector('.selected-img').setAttribute('src', selectedSrc);

});
