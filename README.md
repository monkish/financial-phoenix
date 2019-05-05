## Inspiration
Managing finances is inherently complex. To the point that even getting to the the information that pertains to you can feel incredibly overwhelming. Our goal was to change just that. 

###We set out to
####Build something that is extremely simple to use. 
####Build a solution that is not intrusive and/or data hungry
####One that is lightweight and extremely portable
####Place high importance on user experience
####Ensure that low income individuals/families were our absolute focal point

-

#####Our main source of inspiration came from the [Personal Finance SubReddit's Prime Directive](https://www.reddit.com/r/personalfinance/wiki/commontopics)

-

## What it does
The system takes the user through an extremely simple list of questions. It then generates a curated list of milestones that the user can take as action items.

#####In less than 15 seconds, we take you from a water hose of financial information in the world, to a personalized list of action items you can start tackling today

## How we built it
Our stack: Html/CSS, React.JS, GraphQL with initial alpha hosting through Github Pages

####The Process:
With low income philadelphians at the center of our minds, we set out identify a short list of factors that would help uniquely identify a person's financial situation. Focusing on low income families helped really personalize our survey to that specific audience.

We decided we wanted to keep the barrier of entry extremely low. Minimum data input. No signup required. No personal data collected. 

####The App:
The application is lightweight enough to be served as a dynamic, database-backed application or a static web application.

It is small enough and light weight enough to host for free on many shared cloud platforms. 
It is a phenomenal candidate for open source or crowd sourced. 

####The Milestones:
The financial milestones we serve are age old advice; not opinionated or specific to our time. We wanted to build something would not need frequent updates and modifications. Less than an hour a month of effort could keep this information up to date, and all the links functioning.  

We wanted this to be something a company (like vanguard) could pick up and drop on an existing site/platform with minor modifications or customization. With that in mind we actually spent a considerable amount of time during the hackathon focusing on the actual content that would go into the app. 

We went through multiple iterations, trying to pinpoint what kinds of guidance we wanted to serve to people based on their answers. How to best serve the content, and and to frame it. 

## Challenges we ran into
Keeping the application lightweight: In an effort to make the app as user friendly as possible, we often ran into situation where we had to decide whether or not we really wanted implement certain feature that would require a more robust stack. 

Getting Started: We originally set out to tackle food insecurity. But after hours of research and learning about the main pain points around food insecurity, we found it extremely difficult to land on a solution that we felt was impactful enough. We even did a considerable amount on research on foodbanks and found that contrary to popular belief, the foodbanks' greatest issue weren't about food donations, but about funding! We didn't feel prepared to solve the financial challenges of non profit organizations.

Managing state in the front end without needing to persist data. We had to get creative on how to manage the application flow entirely without heavily depending on a database

## Accomplishments that we're proud of

- We built a close to fully functioning version of our application
- Our application is visually pleasing
- We were able to use our own experience from learning about personal finance to create an application that assists those who need it the most. 
- We worked as a team
- We had fun!

## What we learned
- Managing personal finances still feels too complex for the average individual.
- The median salary is about 32k/year which is just about $15 an hour. People earning this amount are only $10k away from living in poverty. That's one bad medical condition, one bad auto accident, one simple mistake.
- Most of the advice about personal finance is already out there, we just need people to organize it for those who don't know where to start
- Intricacies of managing state in the front end
- The simplicity of Hasura from Huroko
- Food supply is not the biggest pain point for food banks, but rather financing/funding

## What's next for Financial Phoenix
- A distribution strategy, either through financial companies, social programs, state/city governments or simple hosting - solutions
- Create a contribution model and post the solution on gitbub to allow others to build on top of it.
- Move vetting of the advice and guidance
- Increase the personalization of the system (Not by adding more questions, but by linking together the survey answers in a more meaning full way. 
- Link individuals to social workers or other people that are there to help
- More UI/UX fine tuning and clean up

