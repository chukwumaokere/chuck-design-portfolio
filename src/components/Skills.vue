<template>
  <div class="flex flex-col justify-center w-full mx-auto items-center sm:flex sm:flex-col sm:container sm:mx-auto sm:h-auto sm:items-center sm:justify-center sm:w-full">
        <div class="sm:flex">
            <h1 class="circular-font text-4xl sm:text-4xl">Skills</h1>
        </div>
        <p class="py-10 text-xl sm:text-xl text-gray-400">Over {{yeardiff}} years of experience prototyping, developing and shipping apps using various softare and languages professionally.</p> 
        <span class="grid grid-cols-4 place-items-center gap-4 sm:grid sm:grid-cols-8 sm:space-x-4 sm:pt-5">
            <img src="@/assets/Ai.png" />
            <!-- <img src="@/assets/Ae.png" />  -->
            <img src="@/assets/Ps.png" />
            <img src="@/assets/Xd.png" />
            <img src="@/assets/figma.png" width="70"  />
            <img src="@/assets/javascript.png" width="70"  />
            <img src="@/assets/react.png" width="70"  />
            <img src="@/assets/vue.png" width="70"  />
            <img src="@/assets/Angular.png" width="70"  /> 
            <img src="@/assets/PHP.png" width="70"  /> 
            <img src="@/assets/Node.png" width="70"  /> 
            <img src="@/assets/Git.png" width="70"  /> 
            <img src="@/assets/Flutter.png" width="70"  /> 
            <img src="@/assets/html.png" width="70"  /> 
            <img src="@/assets/Ionic.png" width="70"/> 
            <img src="@/assets/Python.png" width="70" /> 
            <img src="@/assets/Cpp.png" width="70"  />
        </span>
        <p class="py-10 text-xl sm:text-xl text-gray-400">And others!</p> 
    </div>
</template>

<script>
export default {
    setup(){
        function dateDiff(startingDate, endingDate) {
            var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
            if (!endingDate) {
                endingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
            }
            var endDate = new Date(endingDate);
            if (startDate > endDate) {
                var swap = startDate;
                startDate = endDate;
                endDate = swap;
            }
            var startYear = startDate.getFullYear();
            var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
            var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            var yearDiff = endDate.getFullYear() - startYear;
            var monthDiff = endDate.getMonth() - startDate.getMonth();
            if (monthDiff < 0) {
                yearDiff--;
                monthDiff += 12;
            }
            var dayDiff = endDate.getDate() - startDate.getDate();
            if (dayDiff < 0) {
                if (monthDiff > 0) {
                    monthDiff--;
                } else {
                    yearDiff--;
                    monthDiff = 11;
                }
                dayDiff += daysInMonth[startDate.getMonth()];
            }
            //yearDiff + 'Y ' + monthDiff + 'M ' + dayDiff + 'D';
            return yearDiff+1;
        }
        let yeardiff = dateDiff('2016-02-22')
        return {
            yeardiff,
        }
    },
}
</script>

<style>
    .circular-font{
        font-family: 'Circular Std';
    }
</style>