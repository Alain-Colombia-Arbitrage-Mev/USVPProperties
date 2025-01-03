import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <>
      <div className="inner-banner-style1 text-center">
        <h3 className="hero-text  animate-up-1" style={{ fontSize: '18px',color: 'white' }} >  <strong>  La mejor forma para </strong></h3> 
        <h2 className="hero-title animate-up-2">Invertir en la casa de tus sueños</h2>
        <p className="hero-text fz22  animate-up-3" style={{ fontSize: '18px',color: 'black' }} >
            <strong> Fondo de inversión &amp;  RWA de bienes raices de lujo </strong> 
        </p>
        <HeroContent />
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal />
        </div>
      </div>
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
