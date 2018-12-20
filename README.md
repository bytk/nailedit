# Excercise 

**online demo:** https://bytk.github.io/nailedit/
**mirror:** http://nic.blizzards.sk/

### TODO

- [x] Create your account on https://github.com/
- [x] Create repository, name is up to your decision
- [x] Invite collaborators
- [ ] Deploy documentation
- [ ] Include thought process


### Story

NailedIT is a small manufacturing company. Their database has been dumped to obtain specific data. Dumped data contains customer info, company, contact, activity, balance and hidden fields. 
Management requires specific views on obtained customer data.

##### Requirements:

- complete customers data
  - company total-balance overview
  - customers with negative balance
- inactive customers 
  - discount field for inactive users (10% from balance)

  
  
### Abstract

At first, i will fetch data from external source, then break whole data into parts. Customers table can be created using obtained data parts. For displaying customers table, i will create single user-friendly html page. 
Customers table structure will be the same as is used in company database. With this result iam able to maintain page-views as they are specified in requirements. 

