USE gigs_db;

INSERT INTO employers (first_name, last_name, email, phone, createdAt, updatedAt) VALUES ('Alexander', 'McQueen','Alex@fakemail.com', '7866663333','2020-01-24 01:39:43','2020-01-24 01:39:59'),
 ('Adriana', 'Queen','adri@fakemail.com', '7866663388','2020-01-24 01:39:43','2020-01-24 01:39:59'),
 ('Fred', 'Fredster','fred@fakemail.com', '7866663399','2020-01-24 01:39:43','2020-01-24 01:39:59');


INSERT INTO applicants (first_name, last_name, email, phone, qualifiers, createdAt, updatedAt) VALUES ('Kristy', 'Cook','Kristy@fakemail.com', '7866661133','I should get this job because..','2020-01-24 01:39:43','2020-01-24 01:39:53'),
('David', 'Wedge','david@fakemail.com', '7866662233','I should get this job because..','2020-01-24 01:39:43','2020-01-24 01:39:56'),
('Love', 'Lively','Love@fakemail.com', '7866660033','I should get this job because..','2020-01-24 01:39:43','2020-01-24 01:39:59');


INSERT INTO gigs (employer_id, title, category, volunteer, pay, recurring_gig, street_address, city, state, zipcode, completion_date, laboring_hours,assigned_to_id, createdAt, updatedAt) VALUES ('1', 'Gardening Gig: trim hedges.','Yardwork', 0, '60',0, '1999 Meridian Ave', 'Mimai Beach', 'Florida', '33139','2020-04-20', '2', '2','2020-01-24 01:39:43','2020-01-24 01:39:59'),
('2', 'Hair Cutting Gig.','Hairdressing', 0, '160',0, '1520 Jefferson Ave', 'Mimai Beach', 'Florida', '33139','2020-04-22', '1', '1','2020-01-24 01:39:43','2020-01-24 01:39:59'),
('3', 'Groceries Run: I need help going to the market for my graceries shopping.','Groceries Run', 1, '0',0, '333 Euclid Ave', 'Mimai Beach', 'Florida', '33139','2020-04-26', '3', '3','2020-01-24 01:39:43','2020-01-24 01:39:59');


USE gigs_db;

INSERT INTO employers (first_name, last_name, email, phone, createdAt, updatedAt) VALUES ('Alexander', 'McQueen','Alex@fakemail.com', '7866663333','2020-01-01','2020-01-02');
INSERT INTO employers (first_name, last_name, email, phone, createdAt, updatedAt) VALUES ('Adriana', 'Queen','adri@fakemail.com', '7866663388','2020-01-01','2020-01-02');
INSERT INTO employers (first_name, last_name, email, phone, createdAt, updatedAt) VALUES ('Fred', 'Fredster','fred@fakemail.com', '7866663399','2020-01-01','2020-01-02');


INSERT INTO applicants (first_name, last_name, email, phone, qualifiers, createdAt, updatedAt)  VALUES ('Kristy', 'Cook','Kristy@fakemail.com', '7866661133','I should get this job because..','2020-01-01','2020-01-02');
INSERT INTO applicants (first_name, last_name, email, phone, qualifiers, createdAt, updatedAt) VALUES ('David', 'Wedge','david@fakemail.com', '7866662233','I should get this job because..','2020-01-01','2020-01-02');
INSERT INTO applicants (first_name, last_name, email, phone, qualifiers, createdAt, updatedAt) VALUES ('Love', 'Lively','Love@fakemail.com', '7866660033','I should get this job because..','2020-01-01','2020-01-02');


INSERT INTO gigs (employer_id, title, description, category, volunteer, pay, recurring_gig, street_address, city, state, zipcode, completion_date, laboring_hours, assigned_to_id, createdAt, updatedAt) VALUES ('1', 'Gardening Gig: trim hedges.','I need someone trustworthy to come trim my hedges. They are about 10ft tall and 360ftsq area','Yardwork', '0', '60','0', '1999 Meridian Ave', 'Mimai Beach', 'Florida', '33139','2020-01-22', '2', '2','2020-01-01','2020-01-02');
INSERT INTO gigs (employer_id, title, description, category, volunteer, pay, recurring_gig, street_address, city, state, zipcode, completion_date, laboring_hours,assigned_to_id, createdAt, updatedAt) VALUES ('2', 'Hair Cutting Gig.','My hair is about 24 inches long and I need a trim.','Hairdressing', '0', '160','0', '1520 Jefferson Ave', 'Mimai Beach', 'Florida', '33139','2020-03-02', '1', '1','2020-01-01','2020-01-02');
INSERT INTO gigs (employer_id, title, description, category, volunteer, pay, recurring_gig, street_address, city, state, zipcode, completion_date, laboring_hours,assigned_to_id, createdAt, updatedAt) VALUES ('3', 'Groceries Run', 'I need help going to the market for my graceries shopping and I cannot pay for this service at the moment.','Groceries Run', '1', '0','0', '333 Euclid Ave', 'Mimai Beach', 'Florida', '33139','2020-01-24', '3', '3','2020-01-01','2020-01-02');
