<template lang="html">
  <sui-segment raised>
    <sui-form id="my-form" @submit.prevent="handleSubmit">
      <sui-form-fields fields="three">
        <sui-form-field>
          <label>Subject</label>
          <input required v-model="event.subject" value="event.subject" name="subject">
        </sui-form-field>
        <sui-form-field>
          <label>Location</label>
          <input required v-model="event.location" value="event.location" name="location">
        </sui-form-field>
        <sui-form-field>
          <label>Marked As</label>
          <sui-dropdown
            selection
            :options="options"
            v-model="event.markedAs"
            name="markedAs"
            value="event.markedAs"
          />
        </sui-form-field>
      </sui-form-fields>
      <sui-form-field>
        <label>Description</label>
        <textarea value="event.description" v-model="event.description" name="description"></textarea>
      </sui-form-field> 
      <sui-button type="submit">Submit</sui-button>
    </sui-form>
  </sui-segment>
</template>

<script>
export default {
  name: "inputForm",
  props:{
    parentData: {
      default () {
        return ''
      }
    },
    date: '',
    event: {
        subject: '',
        location: '',
        description: '',
        markedAs: ''
    }
  },
  data() {
    return {
      childData: [
        { }
      ],
      options: [{
        text: 'Urgent',
        value: 'urgent',
      }, {
        text: 'Meeting',
        value: 'meeting',
      }, {
        text: 'Love',
        value: 'love',
      }, {
        text: 'Casual',
        value: 'casual',
      }],
    };
  },

  beforeMount () {
    this.childData = this.parentData // save props data to itself's data and deal with it
  },

  methods: {
    handleSubmit() {
      var event = {
        subject: this.event.subject,
        location: this.event.location,
        description: this.event.description,
        markedAs: this.event.markedAs
      };
      this.date = this.date.replace(/-0+/g, '-');
      localStorage.setItem(this.date, JSON.stringify(event));
      var labelling = {
        date: this.date, className: event.markedAs
      }
      this.$emit('interface', labelling) // handle data and give it back to parent by interface
    }
  }
};
</script>
