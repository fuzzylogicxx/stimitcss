// import { Application } from "stimulus"
// import { definitionsFromContext } from "stimulus/webpack-helpers"
// const application = Application.start()
// const context = require.context("./controllers", true, /\.js$/)
// application.load(definitionsFromContext(context))

// Imports
import cForm from './components/Form';
import cRatesTable from './components/RatesTable';
import cModal from './components/Modal';
import cComparisonTable from './components/ComparisonTable';
import './scss/style.scss';

// Bind DOM elements to ES6-class-based components
const elBaseForm = document.getElementById('form-rates-base');
const elRatesTable = document.getElementById('latest-rates-table');
const objBaseForm = new cForm(elBaseForm);
const objRatesTable = new cRatesTable(elRatesTable);

// Use our new components
objBaseForm.doSomething();
objRatesTable.doSomething();
