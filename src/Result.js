import React from "react";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";

function CustomCard(props) {
  return (
    <Card style={{ margin: "45px auto" }}>
      <Card.Body class={props.class}>
        <Card.Title as="h3" class={props.class}>
          {props.title}
        </Card.Title>
        <Card.Text>{props.children}</Card.Text>
        <Card.Link href={props.link}>{props.link}</Card.Link>
      </Card.Body>
    </Card>
  );
}

function Result(props) {
  return (
    <div class="home">
      <div class="body-container" style={{ padding: "50px 0" }}>
        <div class="page-center-small text-center">
          <CustomCard
            class="15-20"
            title="Create Free Checking Account"
            link="https://www.reddit.com/r/personalfinance/wiki/banks_and_credit_unions"
          >
            The big change in your life at 18 (19 in Alabama and Nebraska) is
            you are now legally an adult for contractual purposes so it's time
            to get a bank account in your own name i.e. not with your parents.
            You want a no-monthly-fee checking account.
          </CustomCard>

          <CustomCard
            link="https://www.reddit.com/r/personalfinance/wiki/banks_and_credit_unions"
            title="Create Free Savings Account"
            class="15-20"
          >
            You are also going to want a savings account. Credit unions online
            banks and small banks tend to have better customer service than
            large banks.
          </CustomCard>

          <CustomCard
            class="15-20"
            link="https://www.investopedia.com/university/budgeting/basics1.asp"
            title="Set up a budget"
          >
            Budgeting should be the cornerstone of your financial house. You
            should focus on tracking all of your expenses for the month. Start
            with listing your Monthly Income. Budget out with four weeks of
            take-home pay. Take a look at your Mandatory Spending. This is all
            the spending that is related to safety and survival. Then take a
            look at your Debts Goals and Retirement. How much you put here is
            subjective but the faster you take care of this the quicker you can
            become financially independent. Discretionary spending is anything
            that's left over from your goals. Shopping hobbies cable coffee fast
            food dining and so on. Just remember: always live within your means
            and try to save up for capital expenses before buying.
          </CustomCard>
          <CustomCard
            class="15-20"
            link="https://www.nerdwallet.com/blog/investing/invest-savings-short-intermediate-long-term-goals/"
            title="Read: Importance of long term saving"
          >
            Money you’re investing long term — like for retirement — shouldn’t
            be in a plain old savings account. Why? Because despite a few rate
            hikes from the Federal Reserve the average rate of return for
            savings accounts is still a measly 0.09% — or 90 cents per year for
            every $1000 you deposit.
          </CustomCard>
          <CustomCard
            class="20-30"
            link="https://www.investopedia.com/university/retirement/retirement2.asp"
            title="Make a plan for retirement"
          >
            Depending where you are in life retirement could be very far away or
            it could be just around the corner. To make your plan a reality
            start with an estimate of the amount of money you'll need in
            retirement. Be sure to factor in your personal circumstances in
            order to fit the guidelines to your life. Some factors that could
            influence the numbers include your age financial situation and risk
            tolerance for investing.
          </CustomCard>
          <CustomCard
            link="https://www.nerdwallet.com/blog/banking/savings/life-build-emergency-fund/"
            class="20-30"
            title="Set up Emergency Fund"
          >
            For most people 3 to 6 months of expenses is good. A larger
            emergency fund (e.g. 9 to 12 months) may be warranted if your income
            is variable or uncertain. You want some cash around so you can
            quickly handle any relatively minor emergencies. If you don't mind
            the effort it's reasonable to create a tiered emergency fund where
            the upper tiers are earning a small amount of interest.1-2 months of
            expenses should be in your checking accoung - enough to cover any
            normal emergencies aside from job loss long-term medical issues or
            other moderate-to-severe emergencies. 2-4 months of expenses should
            be in your savings account - enough to cover short-term job loss and
            moderate-to-severe emergencies.
            <a class="20-30" />
          </CustomCard>
          <CustomCard
            class="31-40"
            link="https://www.youneedabudget.com/thoughts-on-saving-for-a-down-payment/"
            title="Read: Saving for big life moments"
          >
            If you’re thinking about buying a “big ticket item” — a car or a
            house/condo or a boat or even a home appliance like a TV fridge
            washer and dryer or anything else that you won’t be able to pay for
            upfront in cash — it’s a good idea to put money aside for a down
            payment. Paying for big purchases in cash is always your best bet
            which is one of many reasons it’s a good idea to spend less than you
            earn and have a savings plan.
            <a class="31-40" />
          </CustomCard>
          <CustomCard
            class="31-40"
            link="https://getyourshittogether.org/about/"
            title="Plan for end of life"
          >
            There are many concerns to address at end of life including your
            spiritual affairs your personal relationships and wrapping up any
            unfinished business or goals. These are out of scope for a finance
            discussion; but being well positioned in your financial plans can
            permit use of remaining time for addressing these concerns. Get
            oriented to a checklist that includes a will living will life
            insurance money personal details & personal items.
          </CustomCard>
          <CustomCard
            class="31-40"
            title="Read: Career development"
            link="https://www.skillsyouneed.com/ps/continuing-professional-development.html"
          >
            Continuing professional development or CPD is the ongoing process of
            developing maintaining and documenting your professional skills.
            These skills may be gained formally through courses or training or
            informally on the job or by watching others. Read more at{" "}
          </CustomCard>
          <CustomCard
            class="31-40"
            link="https://www.forbes.com/sites/jrose/2017/11/02/different-sources-income/"
            title="Read: Alternative Income Options"
          >
            This could be money you earn from my home business earned interest
            and dividends monetary gifts or money I get from bank bonuses credit
            card bonuses or other sources of free money. Other examples could
            include working a part-time job receiving rent from property
            royalties etc. These are all forms of income you don’t rely on for
            your day to day living expenses which gives you additional money
            every month to reach your financial goals.
            <a class="31-40" />
          </CustomCard>
          <CustomCard
            class="40+"
            title="Prepare for retiring"
            link="https://www.thebalance.com/prepare-for-retirement-success-2894361"
          >
            The retirement planning process takes time and effort. At times it
            may seem like an overwhelming task. But what you do today can help
            you achieve your retirement goals and allow you to maintain the
            lifestyle you want in your later years.
            <a class="40+" />
          </CustomCard>
          <CustomCard
            class="NoIncome"
            title="Build a resume"
            link="https://www.glassdoor.com/blog/guide/how-to-write-a-resume/"
          >
            Let’s face it: writing a resume can be intimidating. And the
            pressure to make it really sing can make the prospect of putting
            fingers to keyboard that much scarier. But writing the perfect
            resume doesn’t have to be terrifying. In fact it can be easy — if
            you know what you’re doing. Just follow a guide such as the one
            provided by Glassdoor in the link below.
            <a class="NoIncome" />
          </CustomCard>
          <CustomCard
            class="NoIncome"
            link="https://www.goodfinancialcents.com/12-highest-paying-jobs-careers-without-no-college-degree-diploma/"
            title="Read: Top entry level jobs"
          >
            It seems a major shift in employer priorities is occurring in
            certain fields such as manufacturing and information technology (IT)
            where soft skills and on-the-job training are deemed more beneficial
            than a formal educational background. Individuals bringing these
            resources to the table are now in high demand especially since many
            companies now offer assistantship programs or even paid training for
            high-achieving candidates. In this day and age it just might be more
            about the right skills than the right schooling.
            <a class="NoIncome" />
          </CustomCard>
          <CustomCard
            class="NoIncome"
            title="Read: Interview skills"
            link="https://www.monster.com/career-advice/article/boost-your-interview-iq"
          >
            Even the smartest and most qualified job seekers need to prepare for
            their job interview. Why you ask? Interview skills are learned and
            there are no second chances to make a great first impression.
            <a class="NoIncome" />
          </CustomCard>
          <CustomCard
            class="NoIncome"
            link="https://www.cnbc.com/2017/05/10/how-to-find-cheap-housing-on-a-budget.html"
            title="Read: Low cost housing options"
          >
            If you are in the lower or middle class housing is quite possibly
            the largest single expense in your budget--and also the single most
            important. As a fixed cost the expense of housing never ends. Each
            month brings another payment of the rent. Nevertheless you can do a
            lot to save money on housing by seeking out lower-cost housing
            alternatives. You may be surprised to discover what you can do
            without while still living comfortably.
            <a class="NoIncome" />
          </CustomCard>
          <CustomCard
            class="Uncer31"
            link="https://www.themoneychat.com/how-to-drastically-increase-your-savings-rate/"
            title="Read: Building a high savings rate"
          >
            Saving more money helps you become more financially secure stop
            living paycheck to paycheck and prepare for financial stability and
            independence in the future. Whether this means retiring at a certain
            age saving enough for a down payment for a house being able to take
            a vacation when you want/need to or just having peace-of-mind that
            you can cover any unexpected events that pop up saving more will
            help give you peace-of-mind and allow you to control your money
            better.
            <a class="Uncer31" />
          </CustomCard>
          <CustomCard
            class="Uncer31"
            link="https://www.goodfinancialcents.com/12-highest-paying-jobs-careers-without-no-college-degree-diploma/"
            title="Read: Top entry level jobs"
          >
            It seems a major shift in employer priorities is occurring in
            certain fields such as manufacturing and information technology (IT)
            where soft skills and on-the-job training are deemed more beneficial
            than a formal educational background. Individuals bringing these
            resources to the table are now in high demand especially since many
            companies now offer assistantship programs or even paid training for
            high-achieving candidates. In this day and age it just might be more
            about the right skills than the right schooling.
            <a class="Uncer31" />
          </CustomCard>
          <CustomCard
            class="Uncer31"
            title="Read: Acing the interview"
            link="https://www.monster.com/career-advice/article/boost-your-interview-iq"
          >
            Even the smartest and most qualified job seekers need to prepare for
            their job interview. Why you ask? Interview skills are learned and
            there are no second chances to make a great first impression.
            <a class="Uncer31" />
          </CustomCard>
          <CustomCard
            class="Uncer31"
            title="Read: Changing Careers"
            link="https://www.thebalancecareers.com/successful-career-change-2058452"
          >
            Interested in a new career? People seek to change careers for many
            different reasons. Your career goals or values may have changed; you
            may have discovered new interests that you would like to incorporate
            into your job you may wish to make more money or have more flexible
            hours just to name a few.Before you decide it is important to take
            the time to evaluate your present situation to explore career
            options to decide if your career needs making over and to choose a
            career that will be more satisfying for you.
            <a class="Uncer31" />
          </CustomCard>
          <CustomCard
            class="Uncer31"
            link="https://www.themuse.com/advice/schools-not-out-the-importance-of-continuing-education"
            title="Read: Continuing Education"
          >
            It turns out that learning something new not only helps the brain
            function more effectively but improves focus overall confidence and
            self-esteem. It’s also a great way to get social meet new friends
            and expand your professional network! So if you want to kick your
            career into overdrive consider going back to the classroom.
            <a class="Uncer31" />
          </CustomCard>
          <CustomCard
            class="Over31"
            title="Read: Low Risk Investing"
            link="https://www.money-zine.com/investing/investing/low-and-no-risk-investments/"
          >
            While some investors are inclined to take more risk than others
            there is always a place for low risk investments as part of a
            properly-balanced portfolio. This need is particularly evident when
            the stock market turns volatile. In the long term there is a strong
            relationship between risk and reward. The classic investment
            examples include stocks bonds and treasury bills.
            <a class="Over31" />
          </CustomCard>
          <CustomCard
            class="Over31"
            title="Read: Continuing Education"
            link="https://www.themuse.com/advice/schools-not-out-the-importance-of-continuing-education"
          >
            It turns out that learning something new not only helps the brain
            function more effectively but improves focus overall confidence and
            self-esteem. It’s also a great way to get social meet new friends
            and expand your professional network! So if you want to kick your
            career into overdrive consider going back to the classroom.
            <a class="Over31" />
          </CustomCard>
          <CustomCard
            class="Kids"
            link="https://www.forbes.com/sites/nealegodfrey/2017/10/15/saving-for-college-three-choices/#5ca83780402d"
            title="Create Saving plan for college"
          >
            Saving for college in today’s world is a big challenge especially
            given the costs. The expenses surrounding a college education today
            are astounding. According to CollegeData.com the average annual cost
            of a four-year private college is $49320 per year and public
            colleges can cost an average $9650 for in-state residents and $24930
            for out-of-state residents. How do you know what to save and ensure
            that your kids are able to pay for college without incurring a huge
            debt-burden? The best advice is to start saving as early as
            possible. Are you pregnant? Start now! Additionally encourage your
            friends and family to help you along the way. Every penny will help
            and the sooner you start the better you can take advantage of the
            miracle of compounding. If you push off saving your child will incur
            more debt.
            <a class="Kids" />
          </CustomCard>
          <CustomCard
            class="Kids"
            title="Create budget for kids"
            link="https://www.nerdwallet.com/blog/finance/budgeting-new-parents/"
          >
            Becoming a parent will keep your finances in flux for years to come.
            You’re in for a challenging ride. Stay calm. When it comes to
            budgeting for parenthood the keys are equal parts preparedness and
            flexibility. Your expenses and income will both likely change when
            you have a child but your budgeting approach doesn’t have to. You’re
            still stretching your income to cover your expenses and debts plus
            savings.
            <a class="Kids" />
          </CustomCard>
          <CustomCard
            class="Kids"
            link="https://getoutofdebt.org/114023/7-affordable-alternatives-to-expensive-extracurricular-activities"
            title="Read: Low cost extra carriculars"
          >
            Extracurricular activities boost confidence build self-esteem and
            allow children to discover talents and connect with kids who have
            similar interests. However the most in-demand extracurriculars are
            often the most expensive. Fortunately lower-cost activities such as
            music lessons and recreational sports can offer the same benefits
            and you can reduce the strain on your bank account if you know how
            to cut costs on coveted activities.
            <a class="Kids" />
          </CustomCard>
          <CustomCard
            class="Spouse"
            link="https://www.forbes.com/sites/mayakachroolevine/2017/03/27/love-money-financial-talks-to-have-at-every-stage-of-your-relationship/#300658324b76"
            title="Read: Finances and Relationships"
          >
            When do you start talking about money in a relationship? While
            financial compatibility in a relationship is important no one wants
            to explain their 10-year student loan payment plan on a first date.
            Nevertheless money habits (especially the less-than-favorable ones)
            and debt should be out in the open long before a couple moves in
            together or gets engaged in my opinion. Similarly within the first
            year or two I think it’s relatively easy to gauge whether your
            financial values align. If one person is pushing for an
            all-inclusive resort vacation in Tahiti while the other would rather
            take a local weekend camping trip it’s worth discussing the
            difference in spending styles.
            <a class="Spouse" />
          </CustomCard>
          <CustomCard
            class="Spouse"
            title="Setup a prenup or postnup"
            link="https://www.forbes.com/sites/heatherlocus/2018/09/23/why-prenuptial-and-postnuptial-agreements-lead-to-stronger-marriages-and-prevent-disastrous-divorces/#17ffbe336488"
          >
            You can’t predict the future. The hard truth is that the way you
            feel about your partner today may not be the way you feel as life
            evolves. Marriage is wonderful. Marriage is difficult. That is why
            it is so important to have level-headed discussions about what might
            happen if your feelings change in the future now when you are
            sitting on the same side of the table and both truly want what is
            best for each other.
            <a class="Spouse" />
          </CustomCard>
          <CustomCard
            class="Parents/Grandparents"
            link="https://getyourshittogether.org/about/"
            title="Setup plan to save for funeral costs"
          >
            There are many concerns to address at end of life including your
            spiritual affairs your personal relationships and wrapping up any
            unfinished business or goals. These are out of scope for a finance
            discussion; but being well positioned in your financial plans can
            permit use of remaining time for addressing these concerns. Get
            oriented to a checklist that includes a will living will life
            insurance money personal details & personal items.
            <a class="Parents/Grandparents" />
          </CustomCard>
          <CustomCard
            class="Parents/Grandparents"
            link="https://health.usnews.com/wellness/aging-well/articles/2018-10-10/how-should-i-finance-assisted-living"
            title="Read: Assisted living options and costs"
          >
            As health care has improved and life expectancies have extended more
            people are living longer after they would traditionally have stopped
            working. This has led to a potential crisis for many Americans: how
            to pay for the typically increased amount of health care and
            assistance needed as the years march onward. Most facilities rely
            primarily on private payment Medicare does not cover the cost of
            assisted living facilities and Medicaid only kicks in once someone
            has spent down all of their assets and is essentially destitute.
            Saving early and often should form the foundation of your plan.
            <a class="Parents/Grandparents" />
          </CustomCard>
          <CustomCard
            class="CreditCustomCard"
            title="Paying down high interest debt"
            link="http://money.com/money/collection-post/2791960/which-debts-should-i-pay-off-first/"
          >
            When budgeting you should use your extra money to pay down your high
            interest debt (e.g. debts much over 4% interest rate). In all cases
            you should make the minimum payments on all of your debts before
            paying down specific debts more quickly. There are two main methods
            of paying down debt: In the avalanche method debts are paid down in
            order of interest rate starting with the debt that carries the
            highest interest rate. This is the financially optimal method of
            paying down debt and you will pay less money overall compared to the
            snowball method. The snowball method popularized by Dave Ramsey
            debts are paid down in order of balance size starting with the
            smallest. Paying off small debts first may give you a psychological
            boost and improve one's cash flow situation as paid off debts free
            up minimum payments. The downside is that larger loans (that may be
            at higher interest rates) are left untouched for longer costing more
            in the long run.
            <a class="CreditCustomCard" />
          </CustomCard>

          <CustomCard
            class="CreditCustomCard"
            link="https://www.nerdwallet.com/best/credit-cards/balance-transfer"
            title="Read: How to use low interest transfer blances
                    cards"
          >
            A balance transfer allows you to move high-interest debt onto a
            credit card with a lower rate — often 0% for well over a year.
            Transferring a balance to one of these cards can save you hundreds
            or even thousands of dollars in interest money you can apply toward
            getting out of debt sooner.
            <a class="CreditCustomCard" />
          </CustomCard>

          <CustomCard
            class="CreditCustomCard"
            link="https://www.fool.com/the-ascent/credit-cards/blog/6-credit-card-myths-you-should-stop-believing/"
            title="Read: Myths about credit"
          >
            Believing credit card myths can have you paying fees and interest
            unnecessarily keeping cards you don’t need or not getting cards that
            could earn you big rewards. Before you take anything at face value
            do a little digging to make sure it’s the real deal.
            <a class="CreditCustomCard" />
          </CustomCard>

          <CustomCard
            class="CreditCustomCard"
            link="https://www.reddit.com/r/personalfinance/wiki/creditcards#wiki_credit_and_credit.2Fdebit_cards"
            title="Read: CreditCustomCard 101"
          >
            Credit cards are far and away the most widespread form of consumer
            credit in the U.S. A credit card has a dollar limit per account up
            to which the cardholder and their authorized users are allowed to
            spend before being cut off. The card issuer is extending an
            unsecured (i.e. no collateral) loan up to the amount of the card
            limit for a period of one month. The post within the below link can
            teach you what you need to know before jumping into the world of
            credit cards.
            <a class="CreditCustomCard" />
          </CustomCard>

          <CustomCard
            class="StudentLoan"
            link="https://www.thefrugalgene.com/high-interest-debt/"
            title="Refinance high interest loans (over 7%)"
          >
            Debt consolidation is sometimes referred to as refinancing; this
            alludes to the fact that you are basically restructuring your
            previous debt. You are signing up for a new interest rate new
            payments and new repayment terms which means you’re signing up for a
            new financing deal. Such a product is typically offered for credit
            card debt (as mentioned above) student loans (offered by private
            lenders on the market) and mortgages (also by private companies).
            Every year plenty of people take advantage of refinancing and
            consolidation. Since the market interest rate is constantly changing
            many borrowers can refinance for better interest rates all in the
            hopes of spending less.
            <a class="StudentLoan" />
          </CustomCard>

          <CustomCard
            class="StudentLoan"
            title="Read: StudentLoan 101"
            link="https://studentloanhero.com/featured/what-is-a-student-loan-101-work-apply/"
          >
            "You’ve done everything you needed to do to get into college: got
            good grades talked to your guidance counselor and filled out
            applications. But then comes figuring out how to pay for it.Although
            you’ve likely heard of and applied for scholarships you might be
            wondering where student loans come into play. Given the average cost
            of a four-year private college is $33480 per year loans are likely
            going to be part of financing your education. But what is a student
            loan?Studen Loan Hero has put together the basics you should know
            about student loans and how they work."
            <a class="StudentLoan" />
          </CustomCard>

          <CustomCard
            class="StudentLoan"
            link="https://studentloanhero.com/featured/income-based-repayment-plan/"
            title="Read: Income based payments"
          >
            "Looking for a way to get a better handle on your federal student
            loan payments? Then you might want to consider enrolling in the
            Income-Based Repayment (IBR) Plan.IBR is a type of income-driven
            repayment (IDR) plan and can lower your monthly student loan
            payments. If your payments are unaffordable due to a high student
            loan balance compared to your current income an IBR plan can provide
            much-needed relief.But before signing on the dotted line you’ll want
            to be sure you understand IDR plans and how they can affect your
            finances and student debt. "<a class="StudentLoan" />
          </CustomCard>

          <CustomCard
            class="StudentLoan"
            title="Pay off student loans"
            link="https://www.forbes.com/sites/zackfriedman/2018/10/30/best-ways-to-pay-off-student-loans/#130f2004ab42"
          >
            "Here are 4 easy ways to pay off your student loans:1. Refinance
            your student loans2. Consolidate your student loans3. Increase your
            monthly student loan payment4. Make a lump sum payment"
            <a class="StudentLoan" />
          </CustomCard>

          <CustomCard
            class="AutoLoan"
            title="Pay off auto loan"
            link="https://www.payoff.com/life/money/6-ways-to-pay-off-your-car-loan-early/"
          >
            "About seven out of 10 people borrow money to buy their cars and a
            car loan is one of the largest financial obligations you can have.If
            you’re one of them you may have a loan that will take you 60 or 72
            months to pay off. That’s five to six years! That’s too much
            interest to have to pay. So we want to help you get out from under
            that loan faster and save money on interest by giving you 6 ways to
            pay off your car loan early."
            <a class="AutoLoan" />
          </CustomCard>

          <CustomCard
            class="AutoLoan"
            title="Read: Car finance 101"
            link="https://www.thesimpledollar.com/loans/auto/auto-loans-guide/"
          >
            "Getting an auto loan isn’t as tricky as securing a mortgage since
            the lending criteria are a bit more flexible. But you still want to
            begin with a good idea of what you can afford — especially before
            falling for a budget-busting vehicle and committing to a car loan
            that stretches you too thin.The Simple Dollar put together a guide
            that includes a basic primer on what you can expect from the
            car-loan process including how to qualify for a loan where to obtain
            one and whether refinancing is a good idea."
            <a class="AutoLoan" />
          </CustomCard>

          <CustomCard
            class="AutoLoan"
            link="https://www.moneycrashers.com/living-without-car/"
            title="Find out if you can live without a car"
          >
            "If you’ve ever been stuck in a traffic jam sitting motionless
            behind a diesel-belching truck as cyclists glide past happily in the
            bike lane it may have crossed your mind that you’d be happier living
            without a car. But chances are you quickly brushed aside that notion
            imagining just how impractical that would be. After all the whole
            modern world is practically built around automobile travel – and
            with so many places designed to be accessed by car is living without
            one even possible?The answer to that question is far from simple as
            it largely depends on your specific situation: where you live where
            you work and what you do for fun. But the question is worth asking –
            especially if you’re someone who’s happier almost anywhere else than
            behind the wheel. Going without a car just might be the key to a
            healthier more frugal and less stressful life."
            <a class="AutoLoan" />
          </CustomCard>

          <CustomCard
            class="Other"
            title="Pay off personal loans"
            link="https://www.magnifymoney.com/blog/personal-loans/4-traps-to-avoid-when-getting-a-personal-loan/"
          >
            "You can apply for personal loans at banks credit unions or through
            online lenders. And you often don’t have to put up any collateral to
            do so.Unsecured personal loans are different from other types of
            loans such as mortgages and auto loans. Those loans are backed by
            collateral. When you take out a mortgage your home acts as the
            collateral providing a safety net for your lender. If you stop
            making payments your lender can take your home through a foreclosure
            process.With an unsecured personal loan there is nothing for a
            lender to take back should you stop making your payments. Because of
            this this type of loan is riskier for lenders."
            <a class="Other" />
          </CustomCard>

          <CustomCard
            class="Other"
            title="Read: Debt traps to avoid"
            link="https://www.debt.org/advice/avoiding-debt/"
          >
            "The best way to avoid debt is to be proactive about managing your
            money.Avoiding debt requires you to establish a sound financial plan
            and steer clear of the foolish whims that bring short-term
            satisfaction but long-term hardship on the bank account.It’s easy to
            run up enormous amounts of credit card debt by purchasing things you
            really can’t afford. Americans owed $979 billion on their credit
            cards at the end of 2016 or about $8377 per household.It’s also
            commonplace to let student loans ($1.34 trillion owed) car loans
            ($1.2 trillion) or mortgage payments ($8.5 trillion) threaten your
            financial stability. After years of unpaid bills and inadequate
            resources bankruptcy might be the only option.Don’t go there."
          </CustomCard>

          <CustomCard
            class="Other"
            title="Consolidate you debt"
            link="https://www.nerdwallet.com/blog/finance/consolidate-debt/"
          >
            "Debt consolidation rolls high-interest debts such as credit card
            bills into a single lower-interest payment. It can reduce your total
            debt and reorganize it so you pay it off faster.If you’re dealing
            with a manageable amount of debt and just want to reorganize
            multiple bills with different interest rates payments and due dates
            debt consolidation is a sound approach you can tackle on your own."
            <a class="Other" />
          </CustomCard>

          <CustomCard
            class="None"
            title="Obtain a GED"
            link="https://study.com/articles/How_to_get_a_GED_a_Step-by-Step_Process_to_Earn_a_GED.html"
          >
            Successful completion of the General Educational Development (GED)
            exam leads to a high school equivalency credential for adult
            learners without a high school diploma. This GED credential can be
            used to pursue a college education or career advancement.
            <a class="None" />
          </CustomCard>

          <CustomCard
            class="None"
            link="https://www.apprenticeship.gov/"
            title="Read: Vocational Training and Apprenticeships"
          >
            "Apprenticeships provide affordable pathways to high-paying jobs and
            careers without the typical student debt associated with
            college.Career seekers can find apprenticeships in industries such
            as information technology finance and business healthcare
            hospitality transportation and manufacturing.More than 90 percent of
            apprentices remain employed after completing their program and their
            average starting wage is more than $60000. Over their careers
            apprentices earn $300000 more than workers who did not complete an
            apprenticeship.To find apprenticeship opportunities that match your
            interests and skills visit the new Apprenticeship Finder on
            Apprenticeship.gov — a one-stop source to connect career seekers
            employers and education partners with apprenticeship resources."
          </CustomCard>

          <CustomCard
            class="HSNoCollege"
            link="https://www.apprenticeship.gov"
            title="Read: Vocational Training and Apprenticeships"
          >
            "Apprenticeships provide affordable pathways to high-paying jobs and
            careers without the typical student debt associated with
            college.Career seekers can find apprenticeships in industries such
            as information technology finance and business healthcare
            hospitality transportation and manufacturing.More than 90 percent of
            apprentices remain employed after completing their program and their
            average starting wage is more than $60000. Over their careers
            apprentices earn $300000 more than workers who did not complete an
            apprenticeship.To find apprenticeship opportunities that match your
            interests and skills visit the new Apprenticeship Finder on
            Apprenticeship.gov — a one-stop source to connect career seekers
            employers and education partners with apprenticeship resources."
          </CustomCard>

          <CustomCard
            class="HSNoCollege"
            title="Get a job"
            link="https://www.careerbuilder.com/advice/wellpaying-jobs-that-you-can-get-right-out-of-high-school"
          >
            College has never been more expensive and while achieving a degree
            typically does lead to increased earnings it may not be the right
            choice for everyone. In fact there are still plenty of high-earning
            opportunities for those with a high school diploma. And because many
            career paths providing on-the-job training these days it's often
            possible to move up into higher-paying positions without an
            additional degree.
            <a class="HSNoCollege" />
          </CustomCard>

          <CustomCard
            class="HSNoCollege"
            link="https://www.livecareer.com/career/advice/jobs/college-alternatives"
            title="Read: Top college alternative paths"
          >
            "college is not for everyone — nor is it truly needed for everyone —
            and forcing teens to attend college only to have them flunk out is
            doing a disservice to them.Only a few generations ago high-school
            graduates rarely went on to college yet somehow through the years
            college has almost become a rite of passage for teens to pass into
            adulthood and a good career. But teens do not need to attend college
            to become adults and they certainly do not need to attend to land a
            good career."
            <a class="HSNoCollege" />
          </CustomCard>

          <CustomCard
            class="HSNoCollege"
            link="https://www.thebalancecareers.com/highest-paying-occupations-without-a-degree-525687"
            title="Top entry level jobs with high school deploma"
          >
            Although people with bachelor's degrees usually earn more money than
            those with only high school or equivalency diplomas going to college
            isn't an option for everyone. It doesn't mean you won't be able to
            have a well-paying career—not if you choose your occupation wisely.
            You can get high paying jobs without a degree. You may need
            experience for advanced positions and some employers may require
            some college credits.
            <a class="HSNoCollege" />
          </CustomCard>

          <CustomCard
            class="HSCollege"
            title="Read: StudentLoans 101"
            link="https://clark.com/commoncents/student-loans-101-everything-much-borrow-paying-off/"
          >
            "One of the biggest problems with student loan debt in America is
            the lack of understanding of how the process works from start to
            finish. When many people graduate college they are in for a big
            surprise when those student loan payments start coming in.So it’s
            crucial that you actually understand your loans — for two reasons:
            so you don’t suddenly get slapped in the face by them and so you can
            make the best choices for you and your situation including the best
            ways to get the debt paid off."
            <a class="HSCollege" />
          </CustomCard>

          <CustomCard
            class="HSCollege"
            link="https://www.wayup.com/guide/how-do-i-get-an-internship/"
            title="Make a list of possible internships and part time jobs"
          >
            "Internships have slowly graduated from an optional over-the-top
            resume addition to an essential part of finding a job when you
            graduate. More and more businesses are looking for internship
            experience on the resumes of their entry-level job candidates.But
            how do you find an internship? Wayup has put together a helpful
            guide that overviews the steps you can take to finding an
            internship."
            <a class="HSCollege" />
          </CustomCard>

          <CustomCard
            class="HSCollege"
            title="Create a career plan"
            link="https://www.forbes.com/sites/shelcyvjoseph/2018/08/11/what-every-college-student-should-be-doing-for-career-success/#5790f7da62c4"
          >
            If possible every college student should start planning for the
            future early. This means being involved on campus and staying in the
            know of what's happening networking with professors and going after
            professional experiences—this is all in addition to studying and
            acing your classes of course. Doing this can be the difference
            between many job offers by the time it's graduation season or a long
            period of unemployment or underemployment. As a college student you
            want to stay on top of what needs to be done to create a positive
            outcome.
            <a class="HSCollege" />
          </CustomCard>

          <CustomCard
            class="HSCollege"
            link="https://www.glassdoor.com/blog/50-highest-paying-college-majors/"
            title="Top earning college degrees"
          >
            Through an analysis of hundreds of thousands of resumes and
            corresponding salary reports Glassdoor has determined which majors
            pay the most during the first five years out of college. While STEM
            majors take most of the top spots other majors can also pay you
            generously. Plus for each major they’ve identified three of the most
            popular jobs that new grads really take upon entering the real
            world.
            <a class="HSCollege" />
          </CustomCard>

          <CustomCard
            class="CollegeDegree"
            link="https://www.cv-library.co.uk/career-advice/development/5-ways-manage-professional-development/"
            title="Make a plan continuous learning"
          >
            "Professional growth is all about gaining new skills and experience.
            That means your development is either related to your current role
            or the role you want to do next.Personal development fits alongside
            professional growth — so if you want to progress in your career
            you’ll need to develop personally first. That’s the only way you’ll
            be able to handle your fears take on more responsibility and succeed
            with greater challenges."
            <a class="CollegeDegree" />
          </CustomCard>

          <CustomCard
            class="CollegeDegree"
            link="https://www.moneyunder30.com/how-to-select-benefits-at-your-new-job"
            title="Set up your work benefits"
          >
            "Getting a new job is both exciting and nerve-wracking. Maybe it’s
            your first job or maybe you’ve upgraded to a better job. Regardless
            you’re probably balancing the excitement of your new salary with the
            stress of meeting new performance expectations.That said the last
            thing you probably want to think about is choosing your benefits.
            Yet you’re required to make crucial decisions that affect you for
            the next year within the first 30 days of employment. To make life
            easier on you the writers at MoneyUnder30 have put together a simple
            benefits guide to help you choose your benefits appropriately at
            that new job."
            <a class="CollegeDegree" />
          </CustomCard>

          <CustomCard
            class="CollegeDegree"
            title="Find a job"
            link="https://www.thebalance.com/how-to-land-your-first-job-after-college-2059853"
          >
            Securing that first job after college can be a daunting prospect for
            many college seniors and recent graduates. However you can take
            charge of the process by following a few simple strategies to get
            your career off to a positive start. <a class="CollegeDegree" />
          </CustomCard>

          <CustomCard
            class="CollegeDegree"
            link="https://www.northwesternmutual.com/life-and-money/what-to-know-about-money-when-you-enter-the-workforce/"
            title="Read: Things to know when entering the workforce"
          >
            You’ve landed your first “real” job and steady paychecks are an
            actual thing. The financial freedom and comfort might feel very real
            as you enter the workforce but now it’s time to really set the stage
            for adulthood. Not to put too much pressure on you but the
            foundation you build now can help set you up for success.{" "}
            <a class="CollegeDegree" />
          </CustomCard>
        </div>
      </div>
    </div>
  );
}
export default Result;
