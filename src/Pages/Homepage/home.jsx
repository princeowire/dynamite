import { Check, CircleCheck, Download, Grid2x2Check, HomeIcon, Landmark, Linkedin, LockIcon, MapPinHouse, Phone, ShieldHalf, SquareArrowOutUpRight, SquareArrowUpLeft, TrendingUp } from "lucide-react";
import CtaButton from "../../components/landing-page-ui/cta-btn/cta-btn";
import SubHeader from "../../components/landing-page-ui/sub-header/sub-header";
import { one, three, two } from "../../../public/assets/img";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-20"
      >
        <source src="/assets/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/70 -z-10" />

      <div className="opt ml-8 fixed top-1/2 -translate-y-1/2 max-h-75 border flex flex-col p-1 gap-1 items-center justify-between border-[#b5a264]">
        <span className="w-10 h-10 flex items-center justify-center bg-amber-600 hover:bg-amber-300"><HomeIcon  /></span>
        <span className="w-10 h-10 flex items-center justify-center bg-amber-600 hover:bg-amber-300"><TrendingUp /></span>
        <span className="w-10 h-10 flex items-center justify-center bg-amber-600 hover:bg-amber-300"><Landmark /></span>
        <span className="w-10 h-10 flex items-center justify-center bg-amber-600 hover:bg-amber-300"><MapPinHouse /></span>
        <span className="w-10 h-10 flex items-center justify-center bg-amber-600 hover:bg-amber-300"><Phone /></span>
      </div>

      {/* Page Content */}
        <main className="relative min-h-[200vh] text-white z-10">
          
          <section className="h-screen">

            <div className="ml-[20%] mt-24 p-6">
              
              <p className="text-3xl text-[#b5a264]">
                Send and receive money with ease
              </p>

              <p className="text-7xl font-semibold mt-6 "> AND SECURE CLOUD WALLET WITH DYNAMITE </p>

              <div className="mt-48 w-full flex justify-between items-center">

                <CtaButton text="LEARN MORE" />

                <span className="flex gap-4">
                  <button className="bg-[#00000090] p-3 px-4">Open Account</button>
                  <button className="bg-[#00000090] p-3 px-4">Login</button>
                  <button className="bg-[#00000090] p-3 px-4">Download</button>
                </span>

              </div>

            </div>
          </section>

          <section className="">

          </section>

          <section>
            <div className="flex items-center flex-col justify-center">
              <CtaButton text={"APPLY NOW"} />

              <p className="max-w-150 mt-8 text-center leading-8">With virexstack It’s always your decision, but we’re here to give you the confidence you need, at every step. You Deserve Easy Access to Cryptocurrencies We believe that in a decade, the financial system of the internet (That is, commerce that happens on the internet ) will be the largest financial system in the world, and it will be powered by crypto.</p>

              <div className="flex gap-10 mt-16">
                <span className="flex flex-col items-center justify-center">
                 <p> <CircleCheck  className="font-bold" /></p>
                  <p className="flex gap-2 mt-6"> FAST LOGIN <SquareArrowOutUpRight className="text-amber-600"/></p>
                </span>

                <div className="bg-white w-px h-24"></div>

                <span className="flex flex-col items-center justify-center">
                  <p> <CircleCheck  className="font-bold" /></p>
                  <p className="flex gap-2 mt-6"> CREATE ACCOUNT <Download className="text-amber-600"/></p>
                </span>

              </div>
            </div>
          </section>

          <section className="mt-36 flex items-center justify-center flex-col">

            <SubHeader text="JOIN OUR MISSION" />

            <p className="mt-9 text-xl tracking-[2px] text-[#b5a264]">SMART MISSION MANAGEMENT</p>

            <span className="flex gap-6 flex-col mt-8 max-w-150">
              <p>In virexstack Our mission is to facilitate the global free flow of digital value.</p>
              <p>virexstack believes that technological progress will revolutionize the way we create and distribute value. One day, everyone will be involved with crypto.</p>
              <p>Technology-Driven Products We are leveraging cutting-edge technologies to create useful services to improve accessibility to the blockchain revolution.</p>
            </span>

            <div className="mt-10 flex items-center gap-8">

              <span className="flex flex-col items-center justify-center max-w-30 text-center">
                <p> <Check  className="font-bold" /></p>
                <p className="flex gap-2 mt-6">Fast, Secure & On Real Time </p>
                <a href="" className="text-[#b5a264]">Learn More</a>
              </span>

              <div className="bg-white w-px h-24"></div>

              <span className="flex flex-col items-center justify-center max-w-30 text-center">
                <p> <ShieldHalf  className="font-bold" /></p>
                <p className="flex gap-2 mt-6"> £750,000k Deposit</p>
                <a href="" className="text-[#b5a264]">Learn More</a>                
              </span>

              <div className="bg-white w-px h-24"></div>

              <span className="flex flex-col items-center justify-center max-w-30 text-center">
                <p> <LockIcon  className="font-bold" /></p>
                <p className="flex gap-2 mt-6"> FCA Regulated [490397]</p>
                <a href="" className="text-[#b5a264]">Learn More</a>
              </span>

            </div>

            <span className="mt-16">
              <CtaButton text={"APPLY NOW"} />
            </span>

          </section>

          <section className="flex flex-col items-center justify-center gap-6 mt-36">

            <SubHeader text={"The World's Leading crypto wallet"} />

            <div className="w-87.5 my-8">
              <img className="w-full h-full" src={one} />
            </div>

            <div className=" text-center flex items-center justify-center flex-col gap-6">
              <span className="text-[#b5a264] flex gap-2 text-xl">
                <p>Highly-Efficient</p>
                <p>•</p>
                <p> Flexible</p>
                <p>•</p>
                <p>Diverse</p>
                <p>•</p>
                <p>Stable</p>
                <p>•</p>
                <p>Secure.</p>
              </span>

              <p className="max-w-275 tracking-wide text-lg">We’ve assembled a global team of top security professionals who take a risk-based approach to ensuring our clients’ assets are protected at the highest levels while maintaining exceptional performance and an unparalleled client experience. Our team has decades of experience building security programs for the world’s top brands, investigating the largest consumer data breaches, developing security technology trusted by millions of businesses and discovering vulnerabilities in the technology used by billions of people every day.</p>
            </div>

          </section>

          <section className="mt-30 flex flex-col items-center justify-center">

            <SubHeader text={"The World's Leading crypto wallet"}/>

            <div className="w-100 my-18 ">
              <img className="w-full h-full" src={two} alt="The World's Leading crypto wallet"/>
            </div>

            <p className="text-[#b5a264] tracking-widest text-xl">
              The Reliable Web3 Wallet for Global Users
            </p>

            <p className="tracking-wide text-lg text-center mt-6 max-w-250">
              People from 168 countries & regions are using Stronbit Wallet because they agree that Stronbit provides safe & reliable services.
              The $1,000,000 seed fund is now stored in addresses on the blockchain to ensure transparency.
              Start exploring the finest crypto assets in the Web3 World and securely managing your portfolio
            </p>

          </section>


          <section className="mt-30 flex items-center justify-center gap-2 flex-col">
            <SubHeader text={"Major Alerts"}/>

            <div className="w-75 my-8">
              <img className="w-full h-full" src={three} />
            </div>

            <p className="text-[#b5a264] tracking-widest text-xl">
              Set up custom alerts, get notified, and never miss an opportunity.
            </p>

            <p className="tracking-wide text-lg text-center max-w-250">
              Customize Alerts:- Manage your holdings from your mobile device, Manage alerts your own way.
              Push Notifications:- Never miss any market action, even when the app is closed.
            </p>

            <div className="mt-12">
              <div className="h-px w-250 bg-[#ffffff4a]"></div>

              <div className="flex justify-evenly p-8">
                <div className="flex items-center justify-center flex-col">
                  <Grid2x2Check className="w-24 h-24" />

                  <p className="text-[#b5a264] mt-12 text-2xl">Control Your Account</p>
                  <p className="mt-4 max-w-100 tracking-wide text-lg text-center">As they say, not your keys, not your crypto. virexstack.com Private Key Wallets are widely-used wallets for self-custody of your crypto. We make it easy for people who are ready to control their private keys to hold them with a Secret Private Key Recovery Phrase</p>

                   <span className="mt-8"><CtaButton text={"Join"} /></span> 
                </div>

                <div className="w-px h-125 bg-[#ffffff4a] "></div>

                <div className="flex items-center justify-center flex-col">
                  <Grid2x2Check className="w-24 h-24" />

                  <p className="text-[#b5a264] mt-12 text-2xl">Control Your Account</p>
                  <p className="mt-4 max-w-100 tracking-wide text-lg text-center">As they say, not your keys, not your crypto. virexstack.com Private Key Wallets are widely-used wallets for self-custody of your crypto. We make it easy for people who are ready to control their private keys to hold them with a Secret Private Key Recovery Phrase</p>
                  <span className="mt-8"> <CtaButton text={"Join"} /></span>
                </div>
              </div>
            </div>

          </section>

          <section className="mt-30 flex items-center justify-center gap-2 flex-col">
            <SubHeader text={"STORE"} />

            <div className="text-center mt-10 flex flex-col items-center justify-center gap-4" >
              <p>Full control of your cryptos and your keys Easily manage your digital assets, including BTC, ETH, BNB, and other TRC20 tokens.</p>
              <p className="font-semibold">Access Free To Asses Any Time.</p>
              <p>Easily import your existing wallet with a 12/18/24-word recovery phrase.</p>

              <p className="text-[#b5a264]"> SEND</p>
              <p>Send crypto at your preferred confirmation speed and network fee.</p>
            </div>
          </section>

          <section className="mt-30 p-10 px-37.5">
            <SubHeader text={"What We Are"} />

            <p className="mt-8 text-lg">
              We could be the game changer for your Cloud wallet . Our experienced team is on hand to assist you.
            </p>

            <div className="flex justify-between items-center mt-8">

              <div>
                <p className="text-[#b5a264] text-2xl tracking-widest">Contact</p>
                <div className="pt-4">
                  <p>Call: +62 (8)5** 984 9110</p>
                  <p>Email: support@virexstack.com</p>
                </div>
              </div>

              <div>
                <p className="text-[#b5a264] text-2xl tracking-widest">Address</p>
                <div className="pt-4">
                  <p>11 siliwangi</p>
                  <p>coblong, Jawa Barat,</p>
                  <p>Jawa, Indonesia, 40132</p>
                </div>
              </div>

              <div>
                <p className="text-[#b5a264] text-2xl tracking-widest">Navigate</p>
                <div className="pt-4 flex flex-col">
                  <a href="">Home</a>
                  <a href="">Signup</a>
                  <a href="">Login</a>
                </div>
              </div>

            </div>

            <div className="socials flex gap-4 mt-4">

              <div className="border border-white w-14 h-14 flex items-center justify-center rounded-2xl">
                <a  href=""><Linkedin /></a>
              </div>
              <div className="border border-white w-14 h-14 flex items-center justify-center rounded-2xl">
                <a  href=""><Linkedin /></a>
              </div>
              <div className="border border-white w-14 h-14 flex items-center justify-center rounded-2xl">
                <a  href=""><Linkedin /></a>
              </div>
              <div className="border border-white w-14 h-14 flex items-center justify-center rounded-2xl">
                <a  href=""><Linkedin /></a>
              </div>

            </div>

          </section>

          <Footer />
        </main>
    </>
  );
};

export default Home;
