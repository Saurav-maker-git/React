import atomic from "../assets/atomic.jpg";
import high from "../assets/high.jpg";
import fast from "../assets/fast.png";
import powerOfNow from "../assets/powerofnow.jpg";


const books = [
    {
        id : 1,
        image: {
            src: atomic,
            alt: "Atomic Habits"
        },
        title: "Atomic Habits",
        author: "James Clear",
        publish:"2018",
        theme: `Atomic Habits by James Clear is a self-help book that teaches how tiny, 
        incremental changes (atomic habits) compound over time to create remarkable results, 
        focusing on building good habits and breaking bad ones through practical, science-backed strategies like habit stacking, 
        the two-minute rule, and environment design, using real-world examples from athletes and CEOs. 
        The core idea is that small improvements (1%) lead to massive change, and the book provides a step-by-step system based on the cue, craving, response, and reward loop of habits.`
    },
    {
        id : 2,
        image: {
            src: high,
            alt: "The 7 Habits of Highly Effective People"
        },
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        publish: "1989",
        theme: `The book focuses on changing your mindset to improve both your personal and professional life. Instead of looking for quick fixes, Covey outlines seven core habits to help you move from being dependent on others to being independent, and finally to working successfully with others`
    },
    {
        id : 3,
        image: {
            src: fast,
            alt: "Thinking, Fast and Slow"
        },
        title:"Thinking, Fast and Slow",
        author:"Daniel Kahnema",
        publish: "2011",
        theme: `Thinking, Fast and Slow is a bestselling psychology book written by Nobel Prize winner Daniel Kahneman and published on October 25, 2011. The book explains that our brains use two different systems to make decisions and process the world around us. System 1 is fast, automatic, emotional, and operates with little to no effort, like instantly recognizing a familiar face or dodging an obstacle. System 2 is slow, deliberate, logical, and requires a lot of mental energy, like solving a tricky math problem or filling out a complicated form.`
    },
    {
        id : 4,
        image: {
            src: powerOfNow,
            alt: "The Power of Now"
        },
        title:"The Power of Now",
        author: "Eckhart Tolle",
        publish: "1997",
        theme: `The book teaches that the single biggest obstacle to happiness is being trapped in our own thoughts, specifically by constantly worrying about the future or regretting the past. Tolle explains that the past is just a memory and the future is just an expectation, meaning that the present moment—the "Now"—is the only time that actually exists and the only place where true peace can be found. He introduces the concept of the "ego," which is the part of our mind that creates a false identity based on our problems, achievements, and social status, leading to constant mental chatter and emotional pain.`
    }

]
export default books;