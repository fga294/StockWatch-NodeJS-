# StockWatch
StockWatch is a NodeJS application, running on a Google Cloud VM instance (free tier) that pulls stock information from asx.com.au API service (free service), on selected ASX companies, and track it against their performance in the last 52 weeks. It saves data to a MongoDB Atlas cloud database cluster (free tier) and it is presented on front-end using BootStrap 4 (free and open-source CSS framework).  Functionalities such as 'Sorting by Year Low' and 'Sorting by Lowest Price' can assist in identifying buying opportunities.