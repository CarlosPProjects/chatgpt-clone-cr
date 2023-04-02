import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-50">
      <h1 className="text-5xl font-bold mb-20">Carlos IA</h1>
      <div className="flex space-x-2 text-center flex-row max-sm:flex-col">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/**Sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2 max-sm:hidden">
            <p className="infoText">Explain Something to me</p>
            <p className="infoText">
              What is the difference between a dog and a cat?
            </p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/**Sun Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2 max-sm:hidden">
            <p className="infoText">
              Remembers what user said earlier in the conversation
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/**Sun Icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2 max-sm:hidden">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
