USE gigs_db;

INSERT INTO employers (first_name, last_name, email, phone) VALUES ('Alexander', 'McQueen','Alex@fakemail.com', '7866663333');
INSERT INTO employers (first_name, last_name, email, phone) VALUES ('Adriana', 'Queen','adri@fakemail.com', '7866663388');
INSERT INTO employers (first_name, last_name, email, phone) VALUES ('Fred', 'Fredster','fred@fakemail.com', '7866663399');


INSERT INTO applicants (first_name, last_name, email, phone, qualifiers, createdAt, updatedAt) VALUES ('Kristy', 'Cook','Kristy@fakemail.com', '7866661133','I should get this job because..','2020-01-24 01:39:43','2020-01-24 01:39:53');
INSERT INTO applicants (first_name, last_name, email, phone, qualifiers, createdAt, updatedAt) VALUES ('David', 'Wedge','david@fakemail.com', '7866662233','I should get this job because..','2020-01-24 01:39:43','2020-01-24 01:39:56');
INSERT INTO applicants (first_name, last_name, email, phone, qualifiers, createdAt, updatedAt) VALUES ('Love', 'Lively','Love@fakemail.com', '7866660033','I should get this job because..','2020-01-24 01:39:43','2020-01-24 01:39:59');


INSERT INTO gigs (employer_id, title, category, volunteer, pay, recurring_gig, street_address, city, state, zipcode, completion_date, laboring_hours,assigned_to_id) VALUES ('1', 'Gardening Gig: trim hedges.','Yardwork', 'false', '60','false', '1999 Meridian Ave', 'Mimai Beach', 'Florida', '33139','April 20,2020', '2', '2');
INSERT INTO gigs (employer_id, title, category, volunteer, pay, recurring_gig, street_address, city, state, zipcode, completion_date, laboring_hours,assigned_to_id) VALUES ('2', 'Hair Cutting Gig.','Hairdressing', 'false', '160','false', '1520 Jefferson Ave', 'Mimai Beach', 'Florida', '33139','April 22,2020', '1', '1');
INSERT INTO gigs (employer_id, title, category, volunteer, pay, recurring_gig, street_address, city, state, zipcode, completion_date, laboring_hours,assigned_to_id) VALUES ('3', 'Groceries Run: I need help going to the market for my graceries shopping.','Groceries Run', 'true', '0','false', '333 Euclid Ave', 'Mimai Beach', 'Florida', '33139','April 26,2020', '3', '3');
