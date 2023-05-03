const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];

const FormComponent = class {
  constructor() {
    /*access select element */
    this.select = document.querySelector("select[name='status']");
    /*listen to change on select element */
    this.select.addEventListener("change", (e) =>
      this.onChange(e)
    );

    /*access form */
    const form = document.forms[0];
    /*listen to form submit */
    form.addEventListener("submit", (e) => this.onSubmit(e));
  }

  onChange(e) {
    /* find the right oppo */
    const opportunity = this.find(e.target.value);
    /* get the input element */  
    const success = document.querySelector("input[name='success']");
    /* add the value of success to it */
    success.value = opportunity.SUCCESS;
  };

  start() {
    const select = document.getElementsByName('status');
    /* loop through all oppo status from array */
    oppoStatus.forEach((e) => {
      /* create list of options */
      const option = new Option(e.STATUS, e.STATUS)
      /* append list to select element */
      select[0].appendChild(option);
    });
  };

  onSubmit(e) {
    /* block default click handling */
    e.preventDefault();
    /* find right oppo status */
    const opportunity = this.find(this.select.value);
    /* get output element */
    const outputElement = document.querySelector(".output");
    /* get matching status and success */
    const output = {
      status: opportunity.K_OPPO_STATUS,
      success: opportunity.SUCCESS,
    };
    /* output the form element values as JSON string */
    outputElement.innerHTML = JSON.stringify(output);
  }

  find(status) {
    return oppoStatus.find(
      (option) => option.K_OPPO_STATUS === parseInt(status)
    );
  }

};

const fc = new FormComponent();
fc.start();