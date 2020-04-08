USE gigs_db;

INSERT INTO employers (first_name, last_name, email, phone) VALUES ('Alexander', 'McQueen','Alex@fakemail.com', '7866663333');
INSERT INTO employers (first_name, last_name, email, phone) VALUES ('Adriana', 'Queen','adri@fakemail.com', '7866663388');
INSERT INTO employers (first_name, last_name, email, phone) VALUES ('Fred', 'Fredster','fred@fakemail.com', '7866663399');


INSERT INTO applicants (first_name, last_name, email, phone, qualifiers)  VALUES ('Kristy', 'Cook','Kristy@fakemail.com', '7866661133','I should get this job because..');
INSERT INTO applicants (first_name, last_name, email, phone, qualifiers) VALUES ('David', 'Wedge','david@fakemail.com', '7866662233','I should get this job because..');
INSERT INTO applicants (first_name, last_name, email, phone, qualifiers) VALUES ('Love', 'Lively','Love@fakemail.com', '7866660033','I should get this job because..');


INSERT INTO gigs (employer_id, title, description, category, volunteer, pay, recurring_gig, street_address, city, state, zipcode, completion_date, laboring_hours,assigned_to_id) VALUES ('1', 'Gardening Gig: trim hedges.','I need someone trustworthy to come trim my hedges. They are about 10ft tall and 360ftsq area','Yardwork', '0', '60','0', '1999 Meridian Ave', 'Mimai Beach', 'Florida', '33139','2020-01-22', '2', '2');
INSERT INTO gigs (employer_id, title, description, category, volunteer, pay, recurring_gig, street_address, city, state, zipcode, completion_date, laboring_hours,assigned_to_id) VALUES ('2', 'Hair Cutting Gig.','My hair is about 24 inches long and I need a trim.','Hairdressing', '0', '160','0', '1520 Jefferson Ave', 'Mimai Beach', 'Florida', '33139','2020-03-02', '1', '1');
INSERT INTO gigs (employer_id, title, description, category, volunteer, pay, recurring_gig, street_address, city, state, zipcode, completion_date, laboring_hours,assigned_to_id) VALUES ('3', 'Groceries Run', 'I need help going to the market for my graceries shopping and I cannot pay for this service at the moment.','Groceries Run', '1', '0','0', '333 Euclid Ave', 'Mimai Beach', 'Florida', '33139','2020-01-24', '3', '3');
