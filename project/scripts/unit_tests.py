#!/usr/bin/env python3

import unittest
import pandas as pd
from datetime import datetime, timedelta

from fetch_trends import aggregate_hourly_to_daily
from dates import get_end_times, get_start_times


class TestFetch(unittest.TestCase):

    def setUp(self):
        data = {
            "test" : [1] * 24
        }
        dates = [datetime.now()] * 24
        hourly_df = pd.DataFrame(data, index=dates)
        self.daily_result = aggregate_hourly_to_daily(hourly_df)

        longer_data = {
            "test" : list(range(48))
        }
        longer_dates = [datetime.now()] * 48
        longer_hourly_df = pd.DataFrame(longer_data, index=longer_dates)
        self.longer_daily_result = aggregate_hourly_to_daily(longer_hourly_df)

    def test_fetch_return_types(self):
        self.assertIsInstance(self.daily_result, pd.DataFrame, "Should be a dataframe")

    def test_dataframe_lengths(self):
        self.assertEqual(len(self.daily_result), 1, "Should have one day of data")

    def test_daily_aggregate_all_ones(self):
        self.assertEqual(24, self.daily_result["test"].tolist()[0], "Should sum to 24")

    def test_two_day_aggregate_correct_length(self):
       self.assertEqual(len(self.longer_daily_result), 2, "Should have two days of data")

    def test_more_complicated_sum(self):
        self.assertEqual(self.longer_daily_result["test"].tolist()[0], sum(range(0,24)), "Incorrect aggregate for day 1")
        self.assertEqual(self.longer_daily_result["test"].tolist()[1], sum(range(24,48)), "Incorrect aggregate for day 2")


class TestDates(unittest.TestCase):
    def setUp(self):
        self.start = get_start_times(0)
        self.end = get_end_times()

    def test_dates_return_types(self):
        self.assertIsInstance(self.start, tuple, "Must return tuple")
        self.assertIsInstance(self.end, tuple, "Must return tuple")

    def test_dates_return_contents(self):
        for val in self.start:
            self.assertIsInstance(val, int, "Tuple contents must be ints")
        for val in self.end:
            self.assertIsInstance(val, int, "Tuple contents must be ints")

    def test_dates_return_length(self):
        self.assertEqual(len(self.start), 3, "Must return 3 integers")
        self.assertEqual(len(self.end), 3, "Must return 3 integers")

    def test_epoch_to_date(self):
        self.assertEqual(self.start, (1970, 1, 1), "Should be epoch date")

if __name__ == '__main__':
    unittest.main()


