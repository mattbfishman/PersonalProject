Account = new Mongo.Collection('accounts');
Posts = new Mongo.Collection('posts');


if (Meteor.isServer){

	Meteor.startup(function() {
		Meteor.methods({

			'editAccount': function (id, first, last, phone){

				if(!Account.findOne({accountId:id})){
					Account.insert(
						{	
							'accountId': id,
							'name' : {
								'firstName' : first,
								'lastName' : last
							},
							'contact' : {
								'phone' : phone
							}
						},
						{upsert : true}
					);
				}
				else{
					Account.update(
					{'accountId': id},
					{	
						'accountId': id,
						'name' : {
							'firstName' : first,
							'lastName' : last
						},
						'contact' : {
							'phone' : phone
						}
					},
					{upsert : true}
				);
				}
				
			},

			'newPost': function (id, title, desc, date){
				Posts.insert(
					{'accountId': id,
					'title' : title,
					'description' : desc,
					'date': new Date(date)
					}
				);
			},
		});
	});
				
}