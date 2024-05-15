import btcIcon from "../assets/blog/btc-icon.png";
import btcBlockRewardGraph from "../assets/blog/btc-block-reward-graph.jpg";

const blogPosts = [
  {
    title: "The Essence of Bitcoin Halving",
    coverImage: btcIcon,
    slug: "essence-of-bitcoin-halving",
    published : "10 Apr 2024",
    mediumLink :"https://medium.com/@santhoshmani1/the-essence-of-bitcoin-halving-42ab49bff77a",
    description: "What does the process of block reward halving does to Bitcoin ?",
    body: {
      content: `
            
           <p class="blog-para">
            Bitcoin Halving is the process of reducing the amount of block reward for miners. This allows to create a limited supply of bitcoins unlike the unlimited creation & supply of traditional money. Bitcoin halving is the key reason behind the idea of inflation resistivity of Bitcoin. 
            </p>

            <img src=${btcIcon} />

        <p class="blog-para text-center italic text-gray-800">image credits : <a href="https://wikipedia.org">Wikipedia</a>
         </p>

<h2 class="blog-h2">What is Block reward ?</h2>

<p class="blog-para">
The money we send to each other via bitcoins, these are stored in the form of information called as transactions. These transactions are made globally each and every second among individuals or organizations. 
</p>

<p class="blog-para">
When you make a transaction, all these transactions are sent across all the nodes participating in a blockchain network. These nodes are miners who confirms your transactions and helps to maintain the bitcoin blockchain network. Miners will verify your transactions that you are sending unspent, right amount of bitcoins during your transaction. For every 10 minutes, a new block is mined across the network and new bitcoins are generated. 
</p>

<h2 class="blog-h2">How Block reward is distributed ? </h2>

<p class="blog-para">
A block is a list of all transactions verified by the miner nodes. For successfully mining a block, all the nodes which participated in verifying the transactions will be provided an incentive as a recognition of their work. This incentive is what we called as block reward. Different networks of mining nodes often forms a pool in order to verify the transactions and form the longest chain of blocks. The Bitcoin blockchain will provide the incentive to the longest chain block network and all the miners participated will get their reward.

</p>


<h2 class="blog-h2">
Halving History of Bitcoin
</h2>

<p class="blog-para">
During the initial period of the bitcoin protocol launch, Each block has the block reward of 50BTC as a reward. The first having of block reward took place in February 2013 during the block reward reduced from 50 Bitcoins to 25 Bitcoins, then second halving at February 2016 during which the block reward reduced from 25 bitcoins to 12.5 bitcoins, followed by halving in February 2020 till the April 2024, the block reward is 6.25 Bitcoins. 
</p>





<img src="${btcBlockRewardGraph}" alt='bitcoin-block-reward-graph' /> 

<div class="credit">Image credits :  <a href="https://crypto.com">Crypto.com</a></div>

<p class="blog-para">
Bitcoin halving is the process of reducing the block reward given to miners on successful mining of blocks. This allows to limit the supply of bitcoins creation and supply, making it more superior and better against inflation and maintaining its stability.
</p>
            `,
    },
    categories: ["Bitcoin", "Blockchain"],
  },
];

export default blogPosts;
