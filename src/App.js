import React, { useState, useMemo } from "react";
import "./App.css";
import GridLayout from "react-grid-layout";
import { XCircleIcon } from '@heroicons/react/24/solid'


const Window = ({ title, remove }) => {
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h2 className="text-1xl font=semibold">{title}</h2>
              <button
                className="remove bg-transparent border-0 text-black float-right"
                onClick={() => remove()}
              >
                <span className="text-black opacity-7 h-6 w-6 text-xl block absolute -top-3 -right-3"><XCircleIcon className="fill-red-500" /></span>
              </button>
            </div>
            <div className="h-24"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Nav = ({ add, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard of the Workspace
                  </a>
                 
                  <button
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() =>
                      add({
                        x: position === 0 ? 0 : position,
                        y: 0,
                        w: 2,
                        h: 7,
                        static: true,
                        val: "Apps->app1",
                      })
                    }
                  >
                    App1
                  </button>

                  <button
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() =>
                      add({
                        x: position === 0 ? 0 : position,
                        y: 0,
                        w: 2,
                        h: 7,
                        static: true,
                        val: "Apps->app2",
                      })
                    }
                  >
                    App2
                  </button>

                  <button
                    onClick={() =>
                      add({
                        x: position === 0 ? 0 : position,
                        y: 0,
                        w: 2,
                        h: 7,
                        static: true,
                        val: "Apps->app3",
                      })
                    }
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    App3
                  </button>

                  <button
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() =>
                      add({
                        x: position === 0 ? 0 : position,
                        y: 0,
                        w: 2,
                        h: 7,
                        static: true,
                        val: "Apps->app4",
                      })
                    }
                  >
                    App4
                  </button>
                  <button
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() =>
                      add({
                        x: position === 0 ? 0 : position,
                        y: 0,
                        w: 2,
                        h: 7,
                        static: true,
                        val: "Apps->appN",
                      })
                    }
                  >
                    AppN
                  </button>

                 
                </div>
              </div>
            </div>
  
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Hier open unsere main menu </span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

function App() {
  // creation etat initiale
  // setApp... fonction pour changer  l'etet initiale
  const [appContainer, setAppContainer] = useState([]);

  // useMomo fonction hooks change app lorsque son continue se change
  const addAppToCantainer = useMemo(
    () => (newAppContainer) => {
      return setAppContainer([...appContainer, newAppContainer]);
    },
    [appContainer]
  );

  //  . filter fonction ESc5 pour filtrer
  const removeElement = useMemo(
    () => (appToDelete) => {
      setAppContainer(
        appContainer.filter((app) => {
          return app !== appToDelete;
        })
      );
    },
    [appContainer]
  );

  //  (?: if) si vrais => condition1 : snn condition 2
  return (
    <div className="App">
      <Nav
        add={addAppToCantainer}
        position={
          appContainer.length === 0
            ? 0
            : appContainer[appContainer.length - 1].x + 2
        }
      />
      <GridLayout className="layout" cols={12} rowHeight={20} width={1200}>
        {appContainer.length > 0 &&
          appContainer.map((app) => (
            <div key={app.x} data-grid={app}>
              <Window title={app.val} remove={() => removeElement(app)} />
            </div>
          ))}
      </GridLayout>
    </div>
  );
}

export default App;
