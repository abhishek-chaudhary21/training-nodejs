# training-nodejs

Assignment: 
Time Limit: 30 minutes

Create a NodeJS based web application and use appropriate libaries/modules where ever applicable.
Implement the below functionalities in the above project:

Online Shopping Application allows the customers to register and login and search products. Admin shall view the orders placed and add/delete any products to the online system and update the product availability status  
Guest users cannot place any orders.
The core modules of online shopping app are:
1.	Customer registration and login
2.	Search the products


Business Functionalities are:
-----------------------------
A. Registration and Login:
------------------------------------------------
As a customer I should be able to login/Register in the online shopping application
Acceptance criteria:
1.	A logged-in customer can reset their password so they can login, even if they forget their password.
2.	A logged-in user:
		a.	Cannot change their username.
		b.	Can logout from their account.
3.	As a customer I should be able to furnish following details at the time of registration
		a.	First Name
		b.	Last Name
		c.	Email
		d.	Login Id
		e.	Password
		f.	Confirm Password
		g.	Contact Number
4.	All details fields must be mandatory - done
5.	Login Id and Email must be unique - done
6.	Password and Confirm Password must be same - done
7.	If any constraint is not satisfied, validation message must be shown. - done


B. View &Search Products:
------------------------------------------------
As a customer I should be able to view all the products and search any particular products as well
Acceptance criteria:
a.	Customer can view all the existing products. 
b.	Customer can search any particular products based on the product names

Note: For the timebeing, prepare the data setup as the static / hard-coded data inside the same application only, using any specific data structure.

C. Containerise the above application using Docker:
---------------------------------------------------
Once the above application is up and running in your local system, follow the below steps:
1. Setup docker engine/host into the given environment.
2. Create dockerfile for the same given application and make sure docker build is sucessful.
3. Deploy the built Docker Image inside a Docker container and test the application through the docker exposed ports.
4. Once the docker deployment is done, make sure that the application must be working from docker container as well.