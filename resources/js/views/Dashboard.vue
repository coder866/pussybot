<template>
    <div>
        <h1 class="text-blue-500 text-2xl">DashBoard</h1>
        <!--        <sidebar-component></sidebar-component>-->

        <!--        <div class="relative md:ml-64 bg-blueGray-100">-->
        <!--            <navbar-component></navbar-component>-->
        <!--            &lt;!&ndash; Header &ndash;&gt;-->
        <!--            &lt;!&ndash;            <div class="relative bg-green-600 md:pt-32 pb-32 pt-12">&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;        <div class="px-4 md:px-10 mx-auto w-full">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;          <div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;            &lt;!&ndash; Card stats &ndash;&gt;&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;            <div class="flex flex-wrap">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                  <div class="flex-auto p-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    <div class="flex flex-wrap">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          Traffic&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </h5>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <span class="font-semibold text-xl text-blueGray-700">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          350,897&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <div class="relative w-auto pl-4 flex-initial">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          <i class="far fa-chart-bar"></i>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <p class="text-sm text-blueGray-400 mt-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <span class="text-emerald-500 mr-2">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <i class="fas fa-arrow-up"></i> 3.48%&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <span class="whitespace-nowrap">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        Since last month&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    </p>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                  </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;              </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                  <div class="flex-auto p-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    <div class="flex flex-wrap">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          New users&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </h5>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <span class="font-semibold text-xl text-blueGray-700">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          2,356&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <div class="relative w-auto pl-4 flex-initial">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          <i class="fas fa-chart-pie"></i>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    <p class="text-sm text-blueGray-400 mt-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <span class="text-red-500 mr-2">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <i class="fas fa-arrow-down"></i> 3.48%&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <span class="whitespace-nowrap">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        Since last week&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    </p>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                  </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;              </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                  <div class="flex-auto p-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    <div class="flex flex-wrap">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          Sales&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </h5>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <span class="font-semibold text-xl text-blueGray-700">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          924&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <div class="relative w-auto pl-4 flex-initial">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          <i class="fas fa-users"></i>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    <p class="text-sm text-blueGray-400 mt-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <span class="text-orange-500 mr-2">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <i class="fas fa-arrow-down"></i> 1.10%&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <span class="whitespace-nowrap">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        Since yesterday&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    </p>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                  </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;              </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                  <div class="flex-auto p-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    <div class="flex flex-wrap">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          Performance&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </h5>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <span class="font-semibold text-xl text-blueGray-700">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          49,65%&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <div class="relative w-auto pl-4 flex-initial">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                          <i class="fas fa-percent"></i>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    <p class="text-sm text-blueGray-400 mt-4">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <span class="text-emerald-500 mr-2">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        <i class="fas fa-arrow-up"></i> 12%&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      <span class="whitespace-nowrap">&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                        Since last month&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                      </span>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                    </p>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                  </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;                </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;              </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;            </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;          </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;                &lt;!&ndash;        </div>&ndash;&gt;&ndash;&gt;-->
        <!--            &lt;!&ndash;            </div>&ndash;&gt;-->
        <!--            <div class="px-4 md:px-10 mx-auto w-full -m-24">-->
        <!--                &lt;!&ndash;                <div class="flex flex-wrap">&ndash;&gt;-->
        <!--                &lt;!&ndash;                    <line-chart-component></line-chart-component>&ndash;&gt;-->
        <!--                &lt;!&ndash;                    <bar-chart-component></bar-chart-component>&ndash;&gt;-->
        <!--                &lt;!&ndash;                </div>&ndash;&gt;-->
        <!--                <div class="flex flex-wrap mt-4">-->
        <!--                    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">-->
        <!--                        <div-->
        <!--                            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"-->
        <!--                        >-->
        <!--                            <div class="rounded-t mb-0 px-4 py-3 border-0">-->
        <!--                                <div class="flex flex-wrap items-center">-->
        <!--                                    <div-->
        <!--                                        class="relative w-full px-4 max-w-full flex-grow flex-1"-->
        <!--                                    >-->
        <!--                                        <h3-->
        <!--                                            class="font-semibold text-base text-blueGray-700"-->
        <!--                                        >-->
        <!--                                            Page visits-->
        <!--                                        </h3>-->
        <!--                                    </div>-->
        <!--                                    <div-->
        <!--                                        class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"-->
        <!--                                    >-->
        <!--                                        <button-->
        <!--                                            class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"-->
        <!--                                            type="button"-->
        <!--                                            style="transition: all 0.15s ease"-->
        <!--                                        >-->
        <!--                                            See all-->
        <!--                                        </button>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="block w-full overflow-x-auto">-->
        <!--                                &lt;!&ndash; Projects table &ndash;&gt;-->
        <!--                                <table-->
        <!--                                    class="items-center w-full bg-transparent border-collapse"-->
        <!--                                >-->
        <!--                                    <thead>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"-->
        <!--                                            >-->
        <!--                                                Page name-->
        <!--                                            </th>-->
        <!--                                            <th-->
        <!--                                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"-->
        <!--                                            >-->
        <!--                                                Visitors-->
        <!--                                            </th>-->
        <!--                                            <th-->
        <!--                                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"-->
        <!--                                            >-->
        <!--                                                Unique users-->
        <!--                                            </th>-->
        <!--                                            <th-->
        <!--                                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"-->
        <!--                                            >-->
        <!--                                                Bounce rate-->
        <!--                                            </th>-->
        <!--                                        </tr>-->
        <!--                                    </thead>-->
        <!--                                    <tbody>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"-->
        <!--                                            >-->
        <!--                                                /argon/-->
        <!--                                            </th>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                4,569-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                340-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                <i-->
        <!--                                                    class="fas fa-arrow-up text-emerald-500 mr-4"-->
        <!--                                                ></i>-->
        <!--                                                46,53%-->
        <!--                                            </td>-->
        <!--                                        </tr>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"-->
        <!--                                            >-->
        <!--                                                /argon/index.html-->
        <!--                                            </th>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                3,985-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                319-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                <i-->
        <!--                                                    class="fas fa-arrow-down text-orange-500 mr-4"-->
        <!--                                                ></i>-->
        <!--                                                46,53%-->
        <!--                                            </td>-->
        <!--                                        </tr>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"-->
        <!--                                            >-->
        <!--                                                /argon/charts.html-->
        <!--                                            </th>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                3,513-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                294-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                <i-->
        <!--                                                    class="fas fa-arrow-down text-orange-500 mr-4"-->
        <!--                                                ></i>-->
        <!--                                                36,49%-->
        <!--                                            </td>-->
        <!--                                        </tr>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"-->
        <!--                                            >-->
        <!--                                                /argon/tables.html-->
        <!--                                            </th>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                2,050-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                147-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                <i-->
        <!--                                                    class="fas fa-arrow-up text-emerald-500 mr-4"-->
        <!--                                                ></i>-->
        <!--                                                50,87%-->
        <!--                                            </td>-->
        <!--                                        </tr>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"-->
        <!--                                            >-->
        <!--                                                /argon/profile.html-->
        <!--                                            </th>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                1,795-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                190-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                <i-->
        <!--                                                    class="fas fa-arrow-down text-red-500 mr-4"-->
        <!--                                                ></i>-->
        <!--                                                46,53%-->
        <!--                                            </td>-->
        <!--                                        </tr>-->
        <!--                                    </tbody>-->
        <!--                                </table>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    <div class="w-full xl:w-4/12 px-4">-->
        <!--                        <div-->
        <!--                            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"-->
        <!--                        >-->
        <!--                            <div class="rounded-t mb-0 px-4 py-3 border-0">-->
        <!--                                <div class="flex flex-wrap items-center">-->
        <!--                                    <div-->
        <!--                                        class="relative w-full px-4 max-w-full flex-grow flex-1"-->
        <!--                                    >-->
        <!--                                        <h3-->
        <!--                                            class="font-semibold text-base text-blueGray-700"-->
        <!--                                        >-->
        <!--                                            Social traffic-->
        <!--                                        </h3>-->
        <!--                                    </div>-->
        <!--                                    <div-->
        <!--                                        class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"-->
        <!--                                    >-->
        <!--                                        <button-->
        <!--                                            class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"-->
        <!--                                            type="button"-->
        <!--                                            style="transition: all 0.15s ease"-->
        <!--                                        >-->
        <!--                                            See all-->
        <!--                                        </button>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="block w-full overflow-x-auto">-->
        <!--                                &lt;!&ndash; Projects table &ndash;&gt;-->
        <!--                                <table-->
        <!--                                    class="items-center w-full bg-transparent border-collapse"-->
        <!--                                >-->
        <!--                                    <thead class="thead-light">-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"-->
        <!--                                            >-->
        <!--                                                Referral-->
        <!--                                            </th>-->
        <!--                                            <th-->
        <!--                                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"-->
        <!--                                            >-->
        <!--                                                Visitors-->
        <!--                                            </th>-->
        <!--                                            <th-->
        <!--                                                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"-->
        <!--                                                style="min-width: 140px"-->
        <!--                                            ></th>-->
        <!--                                        </tr>-->
        <!--                                    </thead>-->
        <!--                                    <tbody>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"-->
        <!--                                            >-->
        <!--                                                Facebook-->
        <!--                                            </th>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                1,480-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                <div class="flex items-center">-->
        <!--                                                    <span class="mr-2"-->
        <!--                                                        >60%</span-->
        <!--                                                    >-->
        <!--                                                    <div-->
        <!--                                                        class="relative w-full"-->
        <!--                                                    >-->
        <!--                                                        <div-->
        <!--                                                            class="overflow-hidden h-2 text-xs flex rounded bg-red-200"-->
        <!--                                                        >-->
        <!--                                                            <div-->
        <!--                                                                style="-->
        <!--                                                                    width: 60%;-->
        <!--                                                                "-->
        <!--                                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"-->
        <!--                                                            ></div>-->
        <!--                                                        </div>-->
        <!--                                                    </div>-->
        <!--                                                </div>-->
        <!--                                            </td>-->
        <!--                                        </tr>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"-->
        <!--                                            >-->
        <!--                                                Facebook-->
        <!--                                            </th>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                5,480-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                <div class="flex items-center">-->
        <!--                                                    <span class="mr-2"-->
        <!--                                                        >70%</span-->
        <!--                                                    >-->
        <!--                                                    <div-->
        <!--                                                        class="relative w-full"-->
        <!--                                                    >-->
        <!--                                                        <div-->
        <!--                                                            class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"-->
        <!--                                                        >-->
        <!--                                                            <div-->
        <!--                                                                style="-->
        <!--                                                                    width: 70%;-->
        <!--                                                                "-->
        <!--                                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"-->
        <!--                                                            ></div>-->
        <!--                                                        </div>-->
        <!--                                                    </div>-->
        <!--                                                </div>-->
        <!--                                            </td>-->
        <!--                                        </tr>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"-->
        <!--                                            >-->
        <!--                                                Google-->
        <!--                                            </th>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                4,807-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                <div class="flex items-center">-->
        <!--                                                    <span class="mr-2"-->
        <!--                                                        >80%</span-->
        <!--                                                    >-->
        <!--                                                    <div-->
        <!--                                                        class="relative w-full"-->
        <!--                                                    >-->
        <!--                                                        <div-->
        <!--                                                            class="overflow-hidden h-2 text-xs flex rounded bg-purple-200"-->
        <!--                                                        >-->
        <!--                                                            <div-->
        <!--                                                                style="-->
        <!--                                                                    width: 80%;-->
        <!--                                                                "-->
        <!--                                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"-->
        <!--                                                            ></div>-->
        <!--                                                        </div>-->
        <!--                                                    </div>-->
        <!--                                                </div>-->
        <!--                                            </td>-->
        <!--                                        </tr>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"-->
        <!--                                            >-->
        <!--                                                Instagram-->
        <!--                                            </th>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                3,678-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                <div class="flex items-center">-->
        <!--                                                    <span class="mr-2"-->
        <!--                                                        >75%</span-->
        <!--                                                    >-->
        <!--                                                    <div-->
        <!--                                                        class="relative w-full"-->
        <!--                                                    >-->
        <!--                                                        <div-->
        <!--                                                            class="overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200"-->
        <!--                                                        >-->
        <!--                                                            <div-->
        <!--                                                                style="-->
        <!--                                                                    width: 75%;-->
        <!--                                                                "-->
        <!--                                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"-->
        <!--                                                            ></div>-->
        <!--                                                        </div>-->
        <!--                                                    </div>-->
        <!--                                                </div>-->
        <!--                                            </td>-->
        <!--                                        </tr>-->
        <!--                                        <tr>-->
        <!--                                            <th-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"-->
        <!--                                            >-->
        <!--                                                twitter-->
        <!--                                            </th>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                2,645-->
        <!--                                            </td>-->
        <!--                                            <td-->
        <!--                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"-->
        <!--                                            >-->
        <!--                                                <div class="flex items-center">-->
        <!--                                                    <span class="mr-2"-->
        <!--                                                        >30%</span-->
        <!--                                                    >-->
        <!--                                                    <div-->
        <!--                                                        class="relative w-full"-->
        <!--                                                    >-->
        <!--                                                        <div-->
        <!--                                                            class="overflow-hidden h-2 text-xs flex rounded bg-orange-200"-->
        <!--                                                        >-->
        <!--                                                            <div-->
        <!--                                                                style="-->
        <!--                                                                    width: 30%;-->
        <!--                                                                "-->
        <!--                                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"-->
        <!--                                                            ></div>-->
        <!--                                                        </div>-->
        <!--                                                    </div>-->
        <!--                                                </div>-->
        <!--                                            </td>-->
        <!--                                        </tr>-->
        <!--                                    </tbody>-->
        <!--                                </table>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->

        <!--        <router-view></router-view>-->
    </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import SidebarComponent from "../components/Sidebar.vue";
import LineChartComponent from "../components/LineChart.vue";
import BarChartComponent from "../components/BarChart.vue";
export default {
    name: "dashboard-page",
    components: {
        NavbarComponent,
        SidebarComponent,
        LineChartComponent,
        BarChartComponent,
    },
    data() {
        return {
            date: new Date().getFullYear(),
        };
    },
};
</script>
