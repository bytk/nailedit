# Excercise 

**online demo:** https://bytk.github.io/nailedit/ 

### TODO

- [x] Create your account on https://github.com/
- [x] Create repository, name is up to your decision
- [x] Invite collaborators
- [x] Deploy documentation
- [x] Include thought process
- [ ] Additional functionality

#
### Story

NailedIT is a small manufacturing company. Their database has been dumped to obtain specific data. Dumped data contains customer info, company, contact, activity, balance and hidden fields. 
Management requires specific views on obtained customer data.

##### Requirements:

- complete customers data
  - company total-balance overview
  - customers with negative balance
- inactive customers 
  - discount field for inactive users (10% from balance)
- customer statistics
#
  
  
### Abstract

In first step we need to fetch our data from internet and split it into single parts. After this, we can extract every value from any key at each record. To display any data we need to create enviroment as html page with corresponding user-interface (UI) driven by css and javascript. To process customers table, we need to sort customers into two main groups by matching against value from key "isActive". We add new column called "DISCOUNT" where we display two values regarding to customer group. (**REQ.3**) Now we can process table and display complete customers data. (**REQ.1**)
#

###### **REQ.1** COMPLETE CUSTOMERS DATA

*primary view will show relevant customer data, including custom "DISCOUNT" column*

1. map processed data parts into corresponding columns 
2. display customers as they need to be sorted

###### **REQ.2** CUSTOMERS WITH NEGATIVE BALANCE
...
```
tu som skoncil 
```
...


###### **REQ.3** DISCOUNT

*Jim always calculates discount as 10% of their balance, he always needs to put this into calculator and it drives him crazy...*

1. sort customers by matching value from key "isActive"
2. add new column with name "DISCOUNT"
3. "DISCOUNT" contains two values regarding to customer group:
    

customer group | "DISCOUNT"
------------ | -------------
**active customers** | "NO"
**inactive customers** | calculate ( balance * 0.1 ) = **10%**

#

#### Technical overview

1. Fetch data from external source
	1. then split data to parts
   	2. bind required parts as **custom variables**
    3. process **custom variables** to **calculate values**
   	4. use **calculated values** as for **filter rules**
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

 

