

const ControlData = () => {
    return (
        <div>

<div className="text-center mt-16 mb-16">
    <p className="text-gray-300 text-xl">SECURITY</p>
    <h2 className="text-black text-4xl mt">Control your work data</h2>
</div>

            <div className='grid justify-items-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


{/* card2 */}
            <div className="card w-96 ">
  <figure><img src="https://assets.asana.biz/m/278baf0c878570b9/original/enterprise-security-icon-1.svg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Authorize usage</h2>
    <p>Support data confidentiality by mandating two-factor authentication and deploying SSO and SAML 2.0.</p>

  </div>
</div>

{/* card2 */}
            <div className="card w-96 ">
  <figure><img src="https://assets.asana.biz/m/f07030be4d923cc/original/enterprise-security-icon-2.svg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Increase data control</h2>
    <p>Protect work data with advanced features like enterprise key management, data export, data deletion, encryption in transit and at rest, and cross-regional backups.</p>

  </div>
</div>
{/* card3 */}
<div className="card w-96 ">
  <figure><img src="https://assets.asana.biz/m/21e5b02b6bb917ba/original/enterprise-security-icon-3.svg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Enhance security</h2>
    <p>Use audit log API and Splunk to get critical security alerts. Control company Asana access with our CASB provider, and be notified when sensitive data is added to Asana with data loss prevention.</p>

  </div>
</div>

            </div>
        </div>
    );
};

export default ControlData;