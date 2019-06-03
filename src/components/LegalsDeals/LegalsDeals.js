import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './LegalsDeals.css';

const LegalsDeals = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: May 30, 2019</p>
      <h2 id="birthday_gift">Birthday Gift</h2>
			<p><ol>
		<li>The Whichost Birthday Gift is currently available only for Ireland and the UK.</li>
		<li>You must have your Whichost account fully completed, especially the Birthday field.
			<ol>
				<li>Users with an incomplete profile and no Birthday date indicated, will not avail of this benefit.</li>
			</ol>
		</li>
		<li>You get 100% back of your booking payment once it’s confirmed and not within five days of making use of the booking (having the celebration/party) as per the normal procedure. This will come either as a refund or credit to your party bill receipt.
			<ol>
				<li>A refund goes back to the same payment method used to request the booking;</li>
				<li>A refund might take between 7-15 business days. The speed depends entirely on your financial institution;</li>
				<li>The refund benefit is only valid for listings that are managed by Whichost.
					<ol>
						<li>You can find this information at the bottom of the description of the listing. If it's managed by Whichost it will say: <b>“This listing is managed by Whichost.”</b></li>
					</ol>
				</li>
			</ol>

		</li>
		<li>By having your party through Whichost between Thursdays and Sundays, and reviewing the pub, you will receive an One4all Gift Card of up to €200.00, depending on the size of the party as follows:
			<ul>
				<li>Up to 30 people - € 15.00</li>
				<li>31 to 50 people - € 35.00</li>
				<li>51 to 100 people - € 60.00</li>
				<li>101 to 200 people - € 115.00</li>
				<li>201+ people - € 200.00</li>
			</ul>
			<ol>
				<li>Whichost will add an extra €10.00 to the One4all Gift Card if the user has the party at a pub that they recommended to us*. The user can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.
					<ol>
						<li>This is valid for recommendations of pubs not already listed on Whichost.</li>
						<li>The user that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
						<li>The party must be booked at least one full week (7 days) after recommending the pub. That will give Whichost enough time for the pub to be listed.</li>
					</ol>
				</li>
				<li>Only the user that booked the pub can post the review.</li>
				<li>One review per booked party.</li>
				<li>The user must provide proof that the party was held. For this they can use Instagram, Facebook or Twitter as follows:
					<ol>
						<li>The user can prove that they held the party with an Instagram post:
							<ol>
								<li>The post must be generated by the same user that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Instagram, the user must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the user's Instagram account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>The user can prove that they held the party with an Facebook post:
							<ol>
								<li>The post must be generated by the same user that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Facebook, the user must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, the user must Like the Whichost Facebook Page previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the user’s Facebook account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>The user can prove that they held the party with an Twitter post:
							<ol>
								<li>The post must be generated by the same user that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Twitter, the user must properly tag the Whichost Twitter account by entering @whichostie in the post. For this to happen, the user must follow the Whichost Twitter account previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the user's Twitter account for at least one full week (7 days).</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>The review must be submitted within one week of making use of the booking.</li>
				<li>All One4all Gift Cards are sent electronically to the user’s email address in their Whichost account.</li>
			</ol>
		</li>
		<li>By having the party through Whichost between Mondays and Wednesdays, and reviewing the pub, the user will receive an One4all Gift Card of up to €230.00, depending on the size of the party as follows:
			<ul>
				<li>Up to 30 people - € 25.00</li>
				<li>31 to 50 people - € 45.00</li>
				<li>51 to 100 people - € 75.00</li>
				<li>101 to 200 people - € 130.00</li>
				<li>201+ people - € 230.00</li>
			</ul>

			<ol>
				<li>Only the user that booked the pub can post the review.</li>
				<li>One review per booked party.</li>
				<li>The user must provide proof that the party was held. For this they can use Instagram, Facebook or Twitter as follows:
					<ol>
						<li>The user can prove that they held the party with an Instagram post:
							<ol>
								<li>The post must be generated by the same user that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Instagram, the user must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the user’s Instagram account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>The user can prove that they held the party with an Facebook post:
							<ol>
								<li>The post must be generated by the same user that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Facebook, the user must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, the user must Like the Whichost Facebook Page previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the user’s Facebook account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>The user can prove that they held the party with an Twitter post:
							<ol>
								<li>The post must be generated by the same user that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Twitter, the user must properly tag the Whichost Twitter account by entering @whichostie in the post. For this to happen, the user must follow the Whichost Twitter account previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the user’s Twitter account for at least one full week (7 days).</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>The review must be submitted within one week of making use of the booking.</li>
				<li>All One4all Gift Cards are sent electronically to the user’s email address in their Whichost account.</li>
			</ol>
		</li>
		<li>This Whichost benefit does not accumulate with any other deals, promotions or benefits that Whichost may provide at any time.</li>
		<li>Whichost users can avail this benefit only once per year.</li>
		<li>Whichost reserves the right to change these terms and conditions at any time without prior notice. In the event that any changes are made, the revised terms and conditions shall be published immediately.</li>
	</ol></p>
      <br/><br/>
      <h2 id="corporate_benefit">Corporate Benefit</h2>
			<p><ol>

		<li>The Whichost Employee Benefit is currently available only for Ireland and the UK.</li>

		<li>You must register to Whichost using your organisation email address and have your Whichost account fully completed.
			<ol>
				<li>Users with an incomplete profile and using an email different than the one provided by your organisation, will not avail of this benefit.</li>
				<li>If you were already a user of Whichost previously to this benefit, you needs to change the email address in your Whichost account to your organisation email address.</li>
			</ol>
		</li>

		<li>You will get a 100% of your booking payment back once the booking is confirmed. This will come either as a refund or credit to your party bill receipt.
			<ol>
				<li>A refund goes back to the same payment method used to request the booking;</li>
				<li>A refund might take between 7-15 business days. The speed depends entirely on your financial institution;</li>
				<li>The refund benefit is only valid for listings that are managed by Whichost.</li>
			</ol>

		</li>
		<li>By having the party through Whichost between Thursdays and Sundays, and reviewing the pub, you  will receive an One4all Gift Card of up to €280.00, depending on the size of the party as follows:
			<ul>
				<li>Up to 30 people - € 20.00</li>
				<li>31 to 50 people - € 45.00</li>
				<li>51 to 100 people - € 80.00</li>
				<li>101 to 200 people - € 160.00</li>
				<li>201+ people - € 270.00</li>
			</ul>

			<ol>
				<li>Whichost will add an extra €10.00 to the One4all Gift Card if you have the party at a pub that you recommended to us*. You can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.
					<ol>
						<li>This is valid for recommendations of pubs not already listed on Whichost.</li>
						<li>The person that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
						<li>The party must be booked at least one full week (7 days) after recommending the pub. That will provide enough time for the pub to be listed.</li>
					</ol>
				</li>
				<li>You must provide proof that the party was held. For this you can use Instagram, Facebook or Twitter as follows:
					<ol>
						<li>You can prove that you held the party with an Instagram post:
							<ol>
								<li>The post must be generated by the same person that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Instagram, you must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track.</li>
								<li>The post must be kept live on your Instagram account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>You can prove that you held the party with an Facebook post:
							<ol>
								<li>The post must be generated by the same person that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Facebook, you must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, you must Like the Whichost Facebook Page previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on your Facebook account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>You can prove that they held the party with an Twitter post:
							<ol>
								<li>The post must be generated by the same person that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Twitter, you must properly tag the Whichost Twitter account by entering @whichostie in the post. For this to happen, you must follow the Whichost Twitter account previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on your Twitter account for at least one full week (7 days).</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>The review must be submitted within one week of making use of the booking.</li>
				<li>All One4all Gift Cards are sent electronically to you’s email address in your Whichost account.</li>
			</ol>
		</li>
		<li>By having the party through Whichost between Mondays and Wednesdays, and reviewing the pub, you will receive an One4all Gift Card of up to €300.00, depending on the size of the party as follows:
			<ul>
				<li>Up to 30 people - € 30.00</li>
				<li>31 to 50 people - € 55.00</li>
				<li>51 to 100 people - € 95.00</li>
				<li>101 to 200 people - € 175.00</li>
				<li>201+ people - € 300.00</li>
			</ul>

			<ol>
				<li>Whichost will add an extra €10.00 to the One4all Gift Card if you have the party at a pub that you recommended to us*. You can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.
					<ol>
						<li>This is valid for recommendations of pubs not already listed on Whichost.</li>
						<li>The person that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
						<li>The party must be booked at least one full week (7 days) after recommending the pub. That will provide enough time for the pub to be listed.</li>
					</ol>
				</li>
			<li>You must provide proof that the party was held. For this you can use Instagram, Facebook or Twitter as follows:
					<ol>
						<li>You can prove that you held the party with an Instagram post:
							<ol>
								<li>The post must be generated by the same person that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Instagram, you must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track.</li>
								<li>The post must be kept live on your Instagram account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>You can prove that you held the party with an Facebook post:
							<ol>
								<li>The post must be generated by the same person that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Facebook, you must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, you must Like the Whichost Facebook Page previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on your Facebook account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>You can prove that they held the party with an Twitter post:
							<ol>
								<li>The post must be generated by the same person that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Twitter, you must properly tag the Whichost Twitter account by entering @whichostie in the post. For this to happen, you must follow the Whichost Twitter account previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on your Twitter account for at least one full week (7 days).</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>One4all Gift Cards are sent physically. We will require an address to ship it. We will confirm that address through the email in your Whichost account, which must be your organisation email address.</li>
			</ol>
		</li>
		<li>This Whichost benefit does not accumulate with any other deals, promotions or benefits that Whichost may provide at any time.</li>
		<li>Whichost reserves the right to change these terms and conditions at any time without prior notice. In the event that any changes are made, the revised terms and conditions shall be published immediately.</li>
	</ol></p>
      <br/><br/>
      <h2 id="recommend_reward">Recommend Reward</h2>
			<p>
      <ol>
        <li>The Whichost Recommend Reward is currently available only for Ireland and the UK.</li>
        <li>By having the party through Whichost at a pub that you recommend us, you will get a One4all Gift Card for the value of €15 which you can use in over 2,000 shops. You can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.
          <ol>
            <li>This is valid for recommendations of pubs not already listed on Whichost.</li>
            <li>The person that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
            <li>You must provide proof that the party was held. For this you can use Instagram, Facebook or Twitter as follows:
              <ol>
                <li>You can prove that you held the party with an Instagram post:
                  <ol>
                    <li>The post must be generated by the same person that booked the party.</li>
                    <li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
                    <li>When posting the picture on Instagram, You must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track it.</li>
                    <li>The post must be kept live on your Instagram account for at least one full week (7 days).</li>
                  </ol>
                </li>
                <li>You can prove that you held the party with a Facebook post:
                  <ol>
                    <li>The post must be generated by the same person that booked the party.</li>
                    <li>The post must contain a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
                    <li>When posting the picture on Facebook, you must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, you must Like the Whichost Facebook Page previous to the post. This will be the way for us to track it.</li>
                    <li>The post must be kept live on your Facebook account for at least one full week (7 days).</li>
                  </ol>
                </li>
                <li>You can prove that you held the party with a Twitter post:
                  <ol>
                    <li>The post must be generated by the same person that booked the party.</li>
                    <li>The post must contain a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
                    <li>When posting the picture on Twitter, you must properly tag the Whichost Twitter account by entering @whichostie in the post. This will be the way for us to track it.</li>
                    <li>The post must be kept live on your Twitter account for at least one full week (7 days).</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>All One4all Gift Cards are physical. Before issuing the card we will ask you for your  address to deliver it.</li>
          </ol>
        </li>
        <li>This Whichost benefit does not accumulate with any other deals, promotions or benefits that Whichost may provide at any time.</li>
        <li>Whichost reserves the right to change these terms and conditions at any time. In the event that any changes are made, the revised terms and conditions shall be communicated 30 days prior to the official release of the new terms.</li>
      </ol>
      </p>

    </div>
  );
};

LegalsDeals.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

LegalsDeals.propTypes = {
  rootClassName: string,
  className: string,
};

export default LegalsDeals;