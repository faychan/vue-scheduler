<template lang="html">
  <sui-segment raised>
    <sui-form>
      <sui-form-field>
        <label>First Name</label>
        <input placeholder="First Name" >
      </sui-form-field>
      <sui-form-field>
        <label>Last Name</label>
        <input placeholder="Last Name" >
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox label="I agree to the Terms and Conditions" />
      </sui-form-field>
      <sui-button type="submit">Submit</sui-button>
    </sui-form>
  </sui-segment>
</template>

<script>
export default {
  name: "inputForm"
};
</script>
