# Excercise 

*system design oriented documentation*

**online demo:** https://bytk.github.io/nailedit/ 

### TODO

- [x] Create your account on https://github.com/
- [x] Create repository, name is up to your decision
- [x] Invite collaborators
- [x] Deploy documentation
- [x] Include thought process
- [x] Additional functionality (**REQ.3a**, **...**)

#
### User Story

NailedIT is a small manufacturing company. Their database has been dumped to obtain specific data. Dumped data contains customer info, company, contact, activity, balance and hidden fields. 
Management requires specific views on obtained customer data.

##### Requirements:

- complete customers data (**REQ.1**)
  - company total-balance overview (**REQ.2**)
  - customers with negative balance (**REQ.3**)
  	- highlight negative balance rows in complete customers data  (**REQ.3a**)
- inactive customers (**REQ.4**)
  - discount field for inactive users (10% from balance) (**REQ.5**)
- customer statistics (**REQ.6**)
#
  
  
### Abstract

In first step we need to fetch our data from internet and split it into single parts. After this, we can extract every value from any key at each record. To display any data we need to create enviroment as html page with corresponding user-interface (UI) driven by css and javascript. To process customers table, we need to sort customers into two main groups by matching against value from key "isActive" (**REQ.4**). We add new column called "DISCOUNT" where we display two values regarding to customer group. (**REQ.5**) Now we can process table into **UI** and display complete customers data (**REQ.1**) and create selection query based on negative value, that adds additional functionality on customers with negative balance (**REQ.3a**) and select them as filter rule (**REQ.3**). Currently we can select all inputs required for create working filter and bind 3 views on filter controller (in this case radio buttons were used). In order to display basic statistics and total balance, we have to create specific placeholders inside html page and bind on calculated values (**REQ.2, REQ.6**)


#

### Requirements 
##### **REQ.1** COMPLETE CUSTOMERS DATA VIEW

*primary view will show relevant customer data, including custom "DISCOUNT" column*

1. map processed data parts into corresponding columns 
2. display customers as they need to be sorted
3. add a rule for filter that reset rest two possible filter states

##### **REQ.2** COMPANY TOTAL-BALANCE OVERVIEW
*company total-balance will calculate summary from all values in "balance" column. Result will be displayed as statistics using own placeholder in html page*
1. strip decimal point in value of "balance"
2. create a function to calculate summary result
3. display result as statistics in html page

##### **REQ.3** CUSTOMERS WITH NEGATIVE BALANCE VIEW
*additional view shows customers matching against negative value in "balance" key and mark them in **primary view** using css*
1. match every customer **NOT CONTAINING NEGATIVE VALUE** in "balance"
2. create a filter rule and hide every positive-balanced customer from "**customers with negative balance view**
3. add a rule for filter

##### **REQ.4** INACTIVE CUSTOMERS VIEW
*additional view shows customers matching against a value in "isActive" column*
1. match every customer **CONTAINING "inactive" VALUE** in "isActive"

##### **REQ.5** DISCOUNT

*Jim always calculates discount as 10% of their balance, he always needs to put this into calculator and it drives him crazy...*

1. sort customers by matching value from key "isActive"
2. add new column with name "DISCOUNT"
3. "DISCOUNT" contains two values regarding to customer group:
    

customer group | "DISCOUNT"
------------ | -------------
**active customers** | "NO"
**inactive customers** | calculate ( balance * 0.1 ) = **10%**

4. mark field content in **UI** using css

#

#### Technical overview

1. Fetch data from external source
	1. then split data to parts
   	2. bind required parts as **custom variables**
    3. process **custom variables** to **calculate values**
   	4. use **customised selectors** to grab **specific values** and use them  for **filter rules**
   	5. use **filter rules** to maintain **custom views**
2. Create simple html page, driven by css and javascript
	1. create a table for customers
	   1. map **normal data** to **normal fields**
	   2. bind **calculated values** to **custom fields**
	   3. loop **all fields** in **rows** as each **customer record**
	   4. load **customers table** into page 
    2. create filter component
       1. bind each **filter rule** as **filter state**
       2. toggle between **filter states** to change specific **view** 
   3. create additional data placeholders
       1. calculate **additional data** using **custom variables** and **specific values**
       2. put **additional data** as string into specific **data placeholder**
       2. load **data placeholders** into page



